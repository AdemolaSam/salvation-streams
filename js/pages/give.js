/* ============================================================
   Give page
   ============================================================ */
window.renderGive = function () {
  return `
<!-- Header -->
<div class="text-center mb-stack-lg max-w-3xl mx-auto pt-stack-md">
  <h1 class="font-display-lg text-display-lg text-primary mb-stack-sm md:font-display-lg font-headline-lg-mobile text-headline-lg-mobile">
    Support the Movement
  </h1>
  <p class="font-body-lg text-body-lg text-on-surface-variant">
    Your generosity fuels our mission outreach and supports fellowships across regions.
  </p>
</div>

<!-- Donation Columns -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-stack-md lg:gap-gutter">
  <div class="bg-surface-container-lowest rounded-xl shadow-level-1 p-stack-md border border-outline-variant/30 flex flex-col h-full fade-in-section">
    <div class="flex items-center gap-unit mb-stack-sm">
      <span class="material-symbols-outlined text-secondary icon-fill">favorite</span>
      <h2 class="font-headline-md text-headline-md text-primary">Online Giving</h2>
    </div>
    <p class="font-body-md text-body-md text-on-surface-variant mb-stack-md flex-grow">
      Select an amount below for a quick and secure online donation via card or mobile money.
    </p>
    <div class="grid grid-cols-3 gap-unit mb-stack-md">
      <button class="preset-btn py-3 rounded-lg border border-outline-variant text-on-surface hover:border-secondary hover:text-secondary hover:bg-secondary/5 transition-colors font-label-md text-label-md" data-amount="5000">
        &#8358;5k
      </button>
      <button class="preset-btn py-3 rounded-lg border-2 border-secondary text-secondary bg-secondary/10 font-label-md text-label-md transition-colors" data-amount="10000">
        &#8358;10k
      </button>
      <button class="preset-btn py-3 rounded-lg border border-outline-variant text-on-surface hover:border-secondary hover:text-secondary hover:bg-secondary/5 transition-colors font-label-md text-label-md" data-amount="20000">
        &#8358;20k
      </button>
    </div>
    <div class="mb-stack-md">
      <label class="block font-label-md text-label-md text-on-surface-variant mb-unit">Custom Amount (&#8358;)</label>
      <input class="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary font-body-md text-body-md transition-shadow" placeholder="Enter amount" type="number" value="10000"/>
    </div>
    <button class="w-full bg-primary text-on-primary font-label-md text-label-md py-4 rounded-lg shadow-level-1 hover:shadow-level-2 hover:-translate-y-0.5 transition-all duration-300">
      Give Now
    </button>
  </div>

  <div class="bg-primary-container text-on-primary-container rounded-xl shadow-level-1 p-stack-md border border-secondary/20 flex flex-col h-full relative overflow-hidden">
    <div class="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
    <div class="flex items-center gap-unit mb-stack-sm relative z-10">
      <span class="material-symbols-outlined text-secondary-fixed icon-fill">account_balance</span>
      <h2 class="font-headline-md text-headline-md text-on-primary">Bank Transfer</h2>
    </div>
    <p class="font-body-md text-body-md text-primary-fixed-dim mb-stack-md flex-grow relative z-10">
      Make a direct transfer to our central missions account. Your support ensures the continued reach of our fellowships.
    </p>
    <div class="bg-inverse-surface/50 rounded-lg p-stack-sm border border-secondary/30 relative z-10 mb-stack-md">
      <div class="mb-unit">
        <span class="block font-caption text-caption text-tertiary-fixed-dim uppercase tracking-wider">Bank</span>
        <span class="font-body-lg text-body-lg text-on-primary font-semibold">Salvation Trust Bank</span>
      </div>
      <div class="mb-unit">
        <span class="block font-caption text-caption text-tertiary-fixed-dim uppercase tracking-wider">Account Name</span>
        <span class="font-body-lg text-body-lg text-on-primary font-semibold">Salvation Streams Missions</span>
      </div>
      <div class="mt-stack-sm pt-stack-sm border-t border-outline/30 flex justify-between items-end">
        <div>
          <span class="block font-caption text-caption text-tertiary-fixed-dim uppercase tracking-wider mb-1">Account Number</span>
          <span class="font-headline-lg-mobile text-headline-lg-mobile text-secondary-fixed tracking-widest block" id="account-number">0123456789</span>
        </div>
        <button class="bg-secondary/20 hover:bg-secondary/40 text-secondary-fixed p-2 rounded-full transition-colors flex items-center justify-center mb-1 group" id="copy-btn" title="Copy Account Number">
          <span class="material-symbols-outlined group-hover:scale-110 transition-transform">content_copy</span>
        </button>
      </div>
    </div>
    <div class="flex items-center gap-2 text-primary-fixed-dim bg-inverse-surface/30 p-3 rounded-lg relative z-10">
      <span class="material-symbols-outlined text-secondary icon-fill">shield</span>
      <span class="font-caption text-caption">100% of mission donations go directly to the field.</span>
    </div>
  </div>
</div>
`;
};

window.initGive = function () {
  var presetBtns = document.querySelectorAll(".preset-btn");
  var customInput = document.querySelector('input[type="number"]');

  presetBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      presetBtns.forEach(function (b) {
        b.classList.remove("border-2", "border-secondary", "text-secondary", "bg-secondary/10");
        b.classList.add("border", "border-outline-variant", "text-on-surface");
      });
      btn.classList.remove("border", "border-outline-variant", "text-on-surface");
      btn.classList.add("border-2", "border-secondary", "text-secondary", "bg-secondary/10");
      customInput.value = btn.dataset.amount;
    });
  });

  var copyBtn = document.getElementById("copy-btn");
  var accountNumberEl = document.getElementById("account-number");
  var toast = document.getElementById("toast");
  if (!copyBtn || !toast) return;

  var accNumber = accountNumberEl.innerText;
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(accNumber).then(function () {
      toast.classList.remove("hidden");
      toast.classList.add("toast-enter");

      var icon = copyBtn.querySelector("span");
      icon.innerText = "check";
      copyBtn.classList.add("bg-secondary", "text-on-secondary-fixed");
      copyBtn.classList.remove("bg-secondary/20", "text-secondary-fixed");

      setTimeout(function () {
        toast.classList.add("hidden");
        toast.classList.remove("toast-enter");
        icon.innerText = "content_copy";
        copyBtn.classList.remove("bg-secondary", "text-on-secondary-fixed");
        copyBtn.classList.add("bg-secondary/20", "text-secondary-fixed");
      }, 3000);
    });
  });
};
