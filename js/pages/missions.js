/* ============================================================
   Missions page
   ============================================================ */
window.renderMissions = function () {
  return `
<!-- Header -->
<header class="pt-stack-md pb-stack-md text-center">
  <h1 class="font-display-lg text-display-lg text-primary mb-stack-sm">A Timeline of Impact</h1>
  <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
    Journey with us through our historical and ongoing missions, spreading light and hope across borders.
  </p>
</header>

<!-- Vertical Timeline -->
<main class="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-stack-lg">
  <div class="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-surface-variant h-full hidden md:block z-0">
    <div class="timeline-line w-full bg-secondary h-0 top-0 left-0 absolute" id="timeline-progress"></div>
  </div>

  <section class="relative z-10 mb-stack-lg fade-in-section">
    <div class="flex items-center justify-center mb-stack-sm md:hidden">
      <div class="w-4 h-4 rounded-full bg-secondary"></div>
    </div>
    <div class="bg-surface-container-lowest rounded-xl shadow-ambient-1 overflow-hidden flex flex-col md:flex-row border border-surface-variant/50">
      <div class="md:w-1/2 relative h-[400px]">
        <img class="w-full h-full object-cover" data-alt="A captivating documentary-style photograph of a lively community gathering in a vibrant Ugandan village. The scene is bathed in warm, golden hour sunlight, highlighting the joyous expressions of local children and community leaders interacting with volunteers. The color palette features rich earth tones, deep greens, and bright splashes of colorful traditional clothing, contrasting with the sophisticated, crisp off-white UI surrounding it. The mood is hopeful, dynamic, and deeply human, capturing a moment of genuine connection and renewal." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS-UBw2mQaP-_jCfvvynQ06uT7q6OurC1XbF36Um89ldlZBipe-UmED0dgJgytIVXe2H6sPyTR8LRByLMjh7-p_CUDZdw2uCMIRBw79km4ZRNuP3gdNkTL2i91xY-iynT3fxzc9rT4v8FfS_Pe5yYUzyniNm7s3ckJCWoccOrcece6oNdwchC85aKym4cUlDaGbiB2WEQXNqhdGFZsWypSmBFtvmH3vJLKuHOSi1DWidQtj2rdgnxdyw"/>
        <div class="absolute inset-0 bg-primary/20"></div>
      </div>
      <div class="md:w-1/2 p-stack-md flex flex-col justify-center bg-white relative">
        <div class="hidden md:block absolute -left-[32px] top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-background z-20"></div>
        <span class="font-label-md text-label-md text-secondary mb-unit uppercase tracking-widest">Recent Mission</span>
        <h2 class="font-headline-md text-headline-md text-primary mb-stack-sm">Uganda Renewal Project</h2>
        <p class="font-body-md text-body-md text-on-surface-variant mb-stack-md">
          In our most recent endeavor, our teams arrived in central Uganda to establish sustainable water sources and foundational educational facilities. Over the course of three months, the community saw a profound transformation, moving towards self-sufficiency and spiritual rejuvenation.
        </p>
        <a class="inline-flex items-center gap-unit text-secondary font-label-md text-label-md hover:opacity-80 transition-opacity" href="#/give">
          Read Full Story
          <span class="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>
    </div>
  </section>

  <section class="relative z-10 mb-stack-lg fade-in-section">
    <div class="flex items-center justify-center mb-stack-sm md:hidden">
      <div class="w-4 h-4 rounded-full bg-primary"></div>
    </div>
    <div class="bg-surface-container-lowest rounded-xl shadow-ambient-1 overflow-hidden flex flex-col md:flex-row-reverse border border-surface-variant/50">
      <div class="md:w-1/2 relative h-[300px] md:h-auto">
        <img class="w-full h-full object-cover" data-alt="A striking architectural and human-interest photo of a large-scale outreach event in a bustling district of Lagos, Nigeria. The scene is set under a clear, bright sky, with a vast crowd gathering around a modern, temporary open-air stage structure. The lighting is high-key and natural, creating a clean, professional aesthetic that fits seamlessly into a minimalist white and navy UI. The mood is energetic and purposeful, conveying a sense of scale, organization, and spiritual momentum." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTEydFayELfbzizD6W_pAhIZ0yY6ubaI3_UkU6fPnU8oIpBDVBxfAiWnLTdHwSy76_Kbbg21YIcP0OK8zfSyKXfxwYwMIcTys5QcR0eBLqoQ9wGOgcdGLhridASPJgBT7IsLBOZ4Y3BjO-5ook9GaC8oJGJtA7DsaP5IBNiU-b-A1ibTnH1_hBEirOlh5G1FuazvbP1Ij3k6P1KfbnRzU8hABzDPFkeL9xcsgAzsNy21ExdiM8ZOGiIw"/>
      </div>
      <div class="md:w-1/2 p-stack-md flex flex-col justify-center bg-white relative text-left md:text-right">
        <div class="hidden md:block absolute -right-[32px] top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-20"></div>
        <span class="font-label-md text-label-md text-primary mb-unit uppercase tracking-widest">2022</span>
        <h2 class="font-headline-md text-headline-md text-primary mb-stack-sm">Lagos Outreach Initiative</h2>
        <p class="font-body-md text-body-md text-on-surface-variant mb-stack-md ml-auto">
          A massive undertaking to bring medical supplies, spiritual guidance, and structural support to underserved neighborhoods. This mission laid the groundwork for our ongoing African outreach programs.
        </p>
      </div>
    </div>
  </section>

  <section class="relative z-10 mb-stack-lg fade-in-section">
    <div class="flex items-center justify-center mb-stack-sm md:hidden">
      <div class="w-4 h-4 rounded-full bg-primary"></div>
    </div>
    <div class="bg-surface-container-lowest rounded-xl shadow-ambient-1 overflow-hidden flex flex-col md:flex-row border border-surface-variant/50">
      <div class="md:w-1/2 relative h-[300px] md:h-auto">
        <img class="w-full h-full object-cover" data-alt="A serene and contemplative photograph of a winter outreach mission in a remote northern landscape. The scene features volunteers distributing warm supplies amidst a pristine, snow-covered environment. The lighting is soft, diffused, and slightly cool, emphasizing the harshness of the elements contrasted against the warmth of human kindness. The visual style is minimalist and clean, utilizing ample white space and subtle blue tones that complement the overall sophisticated UI design. The mood is peaceful yet resilient." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFvOlWairb5jBHlcSLtt_HKvuM6qZ5VAdtMwS4QNsDk3rWwDXiqc5E3fxT7Um3cEtqUUtqvQfcYSDa2cRg_v94XBSKqujRSGgqj9IaQzlZwMy6kwXfvL_NA-sB0GfUWpyTQTS-zebPlEvPdUZmcwXtxHRLUpWJpJCnI9amPU8sKP9h48_i01urRTomMDuoWSQzogq4_UOM1wU_pIZiBSW4o79IGwpsguCcvbLrUlN3q-VZDBW3WeUN0g"/>
      </div>
      <div class="md:w-1/2 p-stack-md flex flex-col justify-center bg-white relative">
        <div class="hidden md:block absolute -left-[32px] top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-20"></div>
        <span class="font-label-md text-label-md text-primary mb-unit uppercase tracking-widest">2020</span>
        <h2 class="font-headline-md text-headline-md text-primary mb-stack-sm">The Northern Mission</h2>
        <p class="font-body-md text-body-md text-on-surface-variant mb-stack-md">
          Focusing on remote communities facing harsh winter conditions, our teams provided crucial heating resources, food stability, and established enduring fellowship networks in isolated regions.
        </p>
      </div>
    </div>
  </section>

  <section class="mt-stack-lg text-center bg-surface-container-low p-stack-lg rounded-xl border border-surface-variant relative overflow-hidden fade-in-section">
    <div class="relative z-10">
      <h3 class="font-headline-md text-headline-md text-primary mb-stack-sm">The Journey Continues</h3>
      <p class="font-body-md text-body-md text-on-surface-variant mb-stack-md max-w-xl mx-auto">
        Our impact is only made possible through the dedication of our community. Join us in bringing light to new frontiers.
      </p>
      <a href="#/give" class="bg-secondary text-on-secondary-fixed hover:shadow-[0_4px_12px_rgba(115,92,0,0.2)] hover:scale-105 transition-all duration-300 px-8 py-4 rounded-lg font-label-md text-label-md">
        Support Our Next Mission
      </a>
    </div>
    <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl z-0"></div>
    <div class="absolute -left-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl z-0"></div>
  </section>
</main>
`;
};

window.initMissions = function () {
  var timelineLine = document.getElementById("timeline-progress");
  if (!timelineLine) return;

  function updateTimeline() {
    var scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    var scrollPosition = window.scrollY;
    if (scrollTotal > 0) {
      var percentage = (scrollPosition / scrollTotal) * 100;
      timelineLine.style.height = Math.min(100, Math.max(0, percentage)) + "%";
    }
  }

  window.addEventListener("scroll", updateTimeline);
  updateTimeline();
};
