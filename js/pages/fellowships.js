/* ============================================================
   Fellowships page
   ============================================================ */
window.renderFellowships = function () {
  return `
<!-- Hero -->
<section class="flex flex-col gap-stack-sm max-w-3xl mt-stack-md pb-stack-md">
  <h1 class="font-headline-lg-mobile text-headline-lg-mobile md:font-display-lg md:text-display-lg text-primary tracking-tight">
    Where We Gather
  </h1>
  <p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
    Find a fellowship point near you. We meet in homes, halls, and hearts across the region, cultivating spaces of timeless renewal and modern grace.
  </p>
</section>

<!-- Map Concept Section -->
<section class="w-full relative rounded-xl overflow-hidden shadow-ambient-1 bg-surface-container-lowest group cursor-default fade-in-section">
  <div class="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent z-10 pointer-events-none rounded-xl"></div>
  <div class="bg-cover bg-center w-full h-[400px] md:h-[500px] transition-transform duration-700 group-hover:scale-105" data-alt="An elegant, minimalist vector illustration of a regional map drawn in fine deep navy blue lines on a pristine off-white background. The map features subtle, glowing gold accent dots indicating key gathering locations. The visual style is sophisticated, editorial, and clean, conveying a sense of spiritual connection and high-end modern design without any clutter. The lighting implies a soft, uplifting light-mode aesthetic." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAGOPxV37Gp0TkW-xQlAGLG87eC7xIG98lFCLnw7SBOACCZWOpfKIZpn6suDHPM2dAK1jAGhvlcJiFcgNNZl1BZS9DWaB1v-vS0EXzCviY975KqbYDL2kbEubV48R9lSXkjT5cRfn2ImPkEc5qedogk0d551qwZ3fJw7SnTcMD9X_NUvYo8dW1w11to30wFhVHiIaDBMnuoWFP64qEP6T_SnmGsmImjl2g-tjL54idUgNBd7WO-6npchA')"></div>
  <div class="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-20 bg-surface/95 backdrop-blur-sm p-6 rounded-lg shadow-ambient-2 max-w-sm border border-surface-container-highest">
    <div class="flex items-center gap-3 mb-2">
      <span class="material-symbols-outlined text-secondary icon-fill">location_on</span>
      <h3 class="font-headline-md text-headline-md text-primary text-[20px] leading-tight">Active Regions</h3>
    </div>
    <p class="font-body-md text-body-md text-on-surface-variant">Over 50 active fellowships gathering weekly in homes and community halls across the metro area.</p>
  </div>
</section>

<!-- Directory Grid -->
<section class="flex flex-col gap-stack-md mt-stack-lg">
  <div class="flex justify-between items-end border-b border-surface-container-highest pb-4">
    <h2 class="font-headline-md text-headline-md text-primary">Fellowship Directory</h2>
    <div class="hidden md:flex gap-2">
      <button class="text-on-surface-variant hover:text-primary transition-colors"><span class="material-symbols-outlined">grid_view</span></button>
      <button class="text-surface-tint hover:text-primary transition-colors"><span class="material-symbols-outlined">view_list</span></button>
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
    <div class="bg-surface-container-lowest rounded-[16px] p-6 shadow-ambient-1 border border-surface-container-highest hover:shadow-ambient-2 transition-shadow duration-300 flex flex-col justify-between h-full group relative overflow-hidden">
      <div class="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
      <div class="relative z-10">
        <div class="inline-block px-3 py-1 bg-surface-container text-primary text-caption font-caption rounded-full mb-4 font-semibold uppercase tracking-wider">Lagos Region</div>
        <h3 class="font-headline-md text-headline-md text-primary mb-1 text-[24px]">Ikeja Central</h3>
        <p class="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">A vibrant gathering focused on deep scriptural study and community outreach in the heart of the mainland.</p>
        <div class="flex flex-col gap-3 mb-8">
          <div class="flex items-center gap-3 text-on-surface-variant">
            <span class="material-symbols-outlined text-surface-tint text-[20px]">schedule</span>
            <span class="font-body-md text-body-md text-[14px]">Wednesdays, 6:30 PM</span>
          </div>
          <div class="flex items-center gap-3 text-on-surface-variant">
            <span class="material-symbols-outlined text-surface-tint text-[20px]">person</span>
            <span class="font-body-md text-body-md text-[14px]">Elder David O.</span>
          </div>
        </div>
      </div>
      <button class="w-full bg-secondary-container text-on-secondary-container font-label-md text-label-md py-3 rounded-lg hover:bg-secondary-fixed hover:shadow-glow-gold transition-all duration-300 relative z-10 flex items-center justify-center gap-2">
        <span>Join Fellowship</span>
        <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
      </button>
    </div>
    <div class="bg-surface-container-lowest rounded-[16px] p-6 shadow-ambient-1 border border-surface-container-highest hover:shadow-ambient-2 transition-shadow duration-300 flex flex-col justify-between h-full group relative overflow-hidden">
      <div class="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
      <div class="relative z-10">
        <div class="inline-block px-3 py-1 bg-surface-container text-primary text-caption font-caption rounded-full mb-4 font-semibold uppercase tracking-wider">Lagos Region</div>
        <h3 class="font-headline-md text-headline-md text-primary mb-1 text-[24px]">Lekki Peninsula</h3>
        <p class="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">Contemporary worship and reflective discussions suited for young professionals and growing families.</p>
        <div class="flex flex-col gap-3 mb-8">
          <div class="flex items-center gap-3 text-on-surface-variant">
            <span class="material-symbols-outlined text-surface-tint text-[20px]">schedule</span>
            <span class="font-body-md text-body-md text-[14px]">Thursdays, 7:00 PM</span>
          </div>
          <div class="flex items-center gap-3 text-on-surface-variant">
            <span class="material-symbols-outlined text-surface-tint text-[20px]">person</span>
            <span class="font-body-md text-body-md text-[14px]">Pastor Sarah T.</span>
          </div>
        </div>
      </div>
      <button class="w-full bg-secondary-container text-on-secondary-container font-label-md text-label-md py-3 rounded-lg hover:bg-secondary-fixed hover:shadow-glow-gold transition-all duration-300 relative z-10 flex items-center justify-center gap-2">
        <span>Join Fellowship</span>
        <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
      </button>
    </div>
    <div class="bg-surface-container-lowest rounded-[16px] p-6 shadow-ambient-1 border border-surface-container-highest hover:shadow-ambient-2 transition-shadow duration-300 flex flex-col justify-between h-full group relative overflow-hidden">
      <div class="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
      <div class="relative z-10">
        <div class="inline-block px-3 py-1 bg-surface-container text-primary text-caption font-caption rounded-full mb-4 font-semibold uppercase tracking-wider">FCT Region</div>
        <h3 class="font-headline-md text-headline-md text-primary mb-1 text-[24px]">Abuja Garki</h3>
        <p class="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">A serene gathering emphasizing contemplative prayer, acoustic worship, and close-knit support.</p>
        <div class="flex flex-col gap-3 mb-8">
          <div class="flex items-center gap-3 text-on-surface-variant">
            <span class="material-symbols-outlined text-surface-tint text-[20px]">schedule</span>
            <span class="font-body-md text-body-md text-[14px]">Tuesdays, 6:00 PM</span>
          </div>
          <div class="flex items-center gap-3 text-on-surface-variant">
            <span class="material-symbols-outlined text-surface-tint text-[20px]">person</span>
            <span class="font-body-md text-body-md text-[14px]">Bro. Emmanuel A.</span>
          </div>
        </div>
      </div>
      <button class="w-full bg-secondary-container text-on-secondary-container font-label-md text-label-md py-3 rounded-lg hover:bg-secondary-fixed hover:shadow-glow-gold transition-all duration-300 relative z-10 flex items-center justify-center gap-2">
        <span>Join Fellowship</span>
        <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
      </button>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="mt-stack-lg bg-primary rounded-[24px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-ambient-2 relative overflow-hidden fade-in-section">
  <div class="absolute top-0 right-0 w-[300px] h-[300px] bg-secondary/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
  <div class="flex flex-col gap-4 max-w-xl relative z-10 text-center md:text-left">
    <h2 class="font-headline-md text-headline-md text-on-primary">Start a Fellowship in Your Area</h2>
    <p class="font-body-md text-body-md text-primary-fixed-dim">
      Don't see a gathering near you? We provide the resources, guidance, and spiritual covering to help you open your home or local hall as a beacon of light in your community.
    </p>
  </div>
  <a href="#/give" class="shrink-0 bg-secondary-container text-on-secondary-container font-label-md text-label-md px-8 py-4 rounded-xl hover:bg-secondary-fixed hover:shadow-glow-gold hover:-translate-y-1 transition-all duration-300 relative z-10">
    Become a Host
  </a>
</section>
`;
};

window.initFellowships = function () {};
