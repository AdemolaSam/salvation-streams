/* ============================================================
   Salvation Streams - WebGL background shader
   Reusable "Timeless Renewal" animation (deep navy + gold).
   Mounts onto any <canvas> via initShader(canvas).
   ============================================================ */
window.initShader = (function () {
  "use strict";

  function initShader(canvas) {
    if (!canvas) return;

    function syncSize() {
      var w = canvas.clientWidth || 1280;
      var h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }
    if (typeof ResizeObserver !== "undefined") {
      new ResizeObserver(syncSize).observe(canvas);
    }
    syncSize();

    var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) return;

    var vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

    var fs = `precision highp float;
varying vec2 v_texCoord;
uniform float u_time;
uniform vec2 u_resolution;

void main() {
    vec2 uv = v_texCoord;

    // Slow, organic movement
    float time = u_time * 0.15;

    // Create soft, flowing waves
    float noise1 = sin(uv.x * 3.0 + time) * cos(uv.y * 2.0 - time * 0.8);
    float noise2 = sin(uv.y * 4.0 - time * 1.2) * cos(uv.x * 2.5 + time * 0.5);

    // Base colors from design system (Deep Navy and a slightly lighter shade)
    vec3 color1 = vec3(0.06, 0.10, 0.18); // #10192E
    vec3 color2 = vec3(0.10, 0.17, 0.28); // #1A2B48
    vec3 accent = vec3(0.83, 0.69, 0.22); // #D4AF37 (Gold)

    float mixFactor = (noise1 + noise2) * 0.5 + 0.5;
    vec3 baseColor = mix(color1, color2, mixFactor);

    // Add a very subtle gold shimmer in the "light" areas
    float shimmer = pow(mixFactor, 4.0) * 0.05;
    vec3 finalColor = baseColor + accent * shimmer;

    gl_FragColor = vec4(finalColor, 1.0);
}`;

    function cs(type, src) {
      var s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }

    var prog = gl.createProgram();
    gl.attachShader(prog, cs(gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, cs(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    var buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    var pos = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    var uTime = gl.getUniformLocation(prog, "u_time");
    var uRes = gl.getUniformLocation(prog, "u_resolution");
    var uMouse = gl.getUniformLocation(prog, "u_mouse");

    // u_mouse is in pixel coordinates matching u_resolution (ShaderToy convention).
    var mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    window.addEventListener("mousemove", function (event) {
      var rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        var nx = (event.clientX - rect.left) / rect.width;
        var ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    });

    function render(t) {
      if (typeof ResizeObserver === "undefined") syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(render);
    }
    render(0);
  }

  return initShader;
})();
