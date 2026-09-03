/* ============================================================
   Home page
   ============================================================ */
window.renderHome = function () {
  return `
<!-- Hero Section -->
<header class="relative min-h-screen flex items-center justify-center overflow-hidden">
  <div class="absolute inset-0 z-0 bg-primary/20">
    <canvas id="shader-canvas-home" class="absolute inset-0 w-full h-full" style="display:block;width:100%;height:100%"></canvas>
  </div>
  <div class="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center mt-20">
    <div class="glass-card p-8 md:p-12 rounded-2xl max-w-4xl mx-auto fade-in-section">
      <h1 class="font-display-lg text-display-lg text-primary mb-stack-sm md:mb-stack-md leading-tight">
        A Movement of Faith &amp; Fellowship
      </h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant mb-stack-md max-w-2xl mx-auto">
        Experience spiritual renewal through local fellowships and global mission outreach. We are a community driven by timeless truth and modern action.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#/fellowships" class="w-full sm:w-auto bg-primary text-on-primary px-8 py-3 rounded-lg font-label-md text-label-md shadow-soft shadow-hover transition-all duration-300 hover:scale-105">
          Join a Fellowship
        </a>
        <a href="#/missions" class="w-full sm:w-auto bg-surface text-primary border border-outline-variant px-8 py-3 rounded-lg font-label-md text-label-md shadow-soft shadow-hover transition-all duration-300 hover:border-secondary hover:text-secondary">
          Learn More
        </a>
      </div>
    </div>
  </div>
</header>

<!-- Who We Are & Stats -->
<section class="py-stack-lg bg-surface">
  <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
    <div class="grid md:grid-cols-2 gap-stack-lg items-center">
      <div class="fade-in-section">
        <span class="text-secondary font-label-md text-label-md uppercase tracking-wider mb-2 block">Our Identity</span>
        <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-stack-sm">
          More Than a Location. A Movement.
        </h2>
        <p class="text-on-surface-variant font-body-lg text-body-lg mb-6">
          Salvation Streams is not confined to four walls. We are a flowing movement of believers, establishing fellowships in homes, community centers, and across borders. Our focus is on genuine connection, spiritual growth, and impactful mission work, bringing the light of faith wherever we gather.
        </p>
        <a class="inline-flex items-center text-primary font-label-md hover:text-secondary transition-colors duration-300" href="#/missions">
          Read Our Story <span class="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
        </a>
      </div>
      <div class="grid grid-cols-2 gap-4 fade-in-section" style="transition-delay: 200ms;">
        <div class="bg-white p-6 rounded-xl shadow-soft border border-surface-variant text-center">
          <span class="material-symbols-outlined text-secondary text-4xl mb-2">groups</span>
          <div class="font-display-lg text-primary stat-number" data-target="12">0</div>
          <div class="text-on-surface-variant font-caption text-caption uppercase tracking-wider mt-1">Fellowships</div>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-soft border border-surface-variant text-center">
          <span class="material-symbols-outlined text-secondary text-4xl mb-2">public</span>
          <div class="font-display-lg text-primary stat-number" data-target="5">0</div>
          <div class="text-on-surface-variant font-caption text-caption uppercase tracking-wider mt-1">Nations Reached</div>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-soft border border-surface-variant text-center col-span-2">
          <span class="material-symbols-outlined text-secondary text-4xl mb-2">flight_takeoff</span>
          <div class="font-display-lg text-primary stat-number" data-target="20">0</div>
          <div class="text-on-surface-variant font-caption text-caption uppercase tracking-wider mt-1">Mission Trips Completed</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Upcoming Fellowships -->
<section class="py-stack-lg bg-surface-container-low relative overflow-hidden">
  <div class="absolute top-0 right-0 w-96 h-96 bg-primary-fixed rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
  <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
    <div class="text-center mb-stack-lg fade-in-section">
      <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">Upcoming Fellowships</h2>
      <p class="text-on-surface-variant max-w-2xl mx-auto font-body-lg text-body-lg">
        Gather with believers in your region. Experience authentic worship and community in an intimate setting.
      </p>
    </div>
    <div class="grid md:grid-cols-3 gap-8">
      <div class="bg-white rounded-2xl overflow-hidden shadow-soft shadow-hover transition-all duration-300 fade-in-section group">
        <div class="h-48 bg-surface-dim relative overflow-hidden">
          <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A warm, brightly lit living room setting with a circle of comfortable chairs, bathed in soft afternoon sunlight filtering through large windows, evoking a sense of welcoming community and spiritual gathering. High-contrast modern photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6ZMLqHKqhRY48VagNL6U7OaTm7S1E5AhNEIWImcimFSd9zRsHGFDSr-gwOYtjxCgXiYHw1VUNbAfrJsiU_9w9jEVk4KkDvkb4Sh7gG9CPc6vKsESX7lQw7hKD_pcURpXNh0cQc5-Is4K7Tde0Vc9LadrJWHmU7wnh92GS1ONO7snqOXFGo4690LDY_2Nqx81KTVGB5rqcCk0p2qZkkyJY1nkD0Bfys1ImTO_br5xoKHRLpYk5VY5H4A"/>
          <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-primary font-label-md text-xs">
            This Sunday
          </div>
        </div>
        <div class="p-6">
          <div class="flex items-center text-secondary mb-2">
            <span class="material-symbols-outlined text-sm mr-1">location_on</span>
            <span class="font-caption text-caption uppercase tracking-wider">North Region</span>
          </div>
          <h3 class="font-headline-md text-headline-md text-primary mb-2">Oakwood Community Gathering</h3>
          <p class="text-on-surface-variant mb-4 text-sm">A time of worship, shared testimony, and deep biblical study focused on the book of John.</p>
          <a class="text-primary font-label-md hover:text-secondary transition-colors flex items-center" href="#/fellowships">
            RSVP Now <span class="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
          </a>
        </div>
      </div>
      <div class="bg-white rounded-2xl overflow-hidden shadow-soft shadow-hover transition-all duration-300 fade-in-section group" style="transition-delay: 150ms;">
        <div class="h-48 bg-surface-dim relative overflow-hidden">
          <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="An elegant, modern community hall space with high ceilings and minimalist decor. Sunlight streams across neat rows of seating. The color palette is composed of pristine whites and deep navy accents, creating a calm, reflective atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHZkAam6KMfVQ83Sf17zNv8AylePWWj8nYsaI6zvnNRnD4pcq8KrPe_a-3EoN5sKrWnS72QBwn94Mq9xZ2-LL21m_YdqqMbAmgX4VXqL1Xw8zLDzZyhm_sapOSJ0E3G45HZbyqqR0xhSmfZ_GNHNJ32S8d0kLtsFNqs4MsEVaS8dxnH7n1ZYJdZMyuAWIANotWy6vryOklFlH8UHH8m6rTOkiOeQUnAsLYLIBVmOk0aLBccHlewaAxkw"/>
          <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-primary font-label-md text-xs">
            Next Wednesday
          </div>
        </div>
        <div class="p-6">
          <div class="flex items-center text-secondary mb-2">
            <span class="material-symbols-outlined text-sm mr-1">location_on</span>
            <span class="font-caption text-caption uppercase tracking-wider">City Center</span>
          </div>
          <h3 class="font-headline-md text-headline-md text-primary mb-2">Midweek Renewal Service</h3>
          <p class="text-on-surface-variant mb-4 text-sm">Recharge your week with contemplative prayer and acoustic worship in the heart of the city.</p>
          <a class="text-primary font-label-md hover:text-secondary transition-colors flex items-center" href="#/fellowships">
            RSVP Now <span class="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
          </a>
        </div>
      </div>
      <div class="bg-white rounded-2xl overflow-hidden shadow-soft shadow-hover transition-all duration-300 fade-in-section group" style="transition-delay: 300ms;">
        <div class="h-48 bg-surface-dim relative overflow-hidden">
          <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A serene outdoor garden setting with scattered seating under large oak trees. The lighting is golden hour, casting long, warm shadows. The environment feels peaceful, inviting, and connected to nature. Minimalist aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD53e1Qzw6GR4SLsp7-MnU1MPR-_v5UCnTUykY8t2pgsv7VB0wh53yuw7ffjqkK6AhqQ8gNJshARHLu1ICumYNHGCk4rjkHeeKoY1LywjnH2jzjD-bxbwc4oX_gX_4UCqTvEDs_dsTNQZ9ILW6pJnrNbKjOLyb3pOmM6XVAzxbtfadCg2NYUPQZ52M4pqbQ_aHnFuEf_wCs-xIjmacWXQJHxyRCR5u8E0zWzA__PSKUF8fGBhSK0OxLjg"/>
          <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-primary font-label-md text-xs">
            Sept 15th
          </div>
        </div>
        <div class="p-6">
          <div class="flex items-center text-secondary mb-2">
            <span class="material-symbols-outlined text-sm mr-1">location_on</span>
            <span class="font-caption text-caption uppercase tracking-wider">Westside Park</span>
          </div>
          <h3 class="font-headline-md text-headline-md text-primary mb-2">Outdoor Family Fellowship</h3>
          <p class="text-on-surface-variant mb-4 text-sm">Bring your family for a picnic-style fellowship featuring outdoor worship and children's activities.</p>
          <a class="text-primary font-label-md hover:text-secondary transition-colors flex items-center" href="#/fellowships">
            RSVP Now <span class="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Mission Highlight -->
<section class="py-stack-lg bg-primary text-on-primary relative">
  <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
    <div class="grid md:grid-cols-2 gap-stack-lg items-center">
      <div class="order-2 md:order-1 fade-in-section rounded-2xl overflow-hidden shadow-2xl">
        <img class="w-full h-auto object-cover aspect-video md:aspect-[4/3]" data-alt="A compelling documentary-style photograph of a community outreach project in Uganda. The scene captures vibrant smiles and dynamic interaction between volunteers and locals against a backdrop of a newly constructed community center. Warm, hopeful lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFwU9GAqqsso6QQLZiQ7vLPqmfwJwA1uM7dirOXt7dMHL3nNlxD2erEEM0KO3JqKsk5zeS6kcXNLNd2SU1HRbulMrFJVE6RVjO7QPb6Rh8epacZ6eAN4fj-lJ0dbsDNLpG6Lx8-sor6GYXfL8MVglM4NJUpISFpAbwipctCOI2WQx1PXtBgedZ67-y0rdj5EQbGe9_munwJw_U_2oJrMulXD0s_sSyp-7jOWjMX2MXC9XC9QUiAso-vg"/>
      </div>
      <div class="order-1 md:order-2 fade-in-section">
        <span class="text-secondary-fixed font-label-md text-label-md uppercase tracking-wider mb-2 block flex items-center">
          <span class="material-symbols-outlined mr-2 text-sm">flare</span> Featured Mission
        </span>
        <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-stack-sm text-on-primary">
          Hope &amp; Healing in Uganda
        </h2>
        <p class="text-surface-variant/80 font-body-lg text-body-lg mb-6">
          Our recent mission to Uganda focused on establishing a clean water source and partnering with local leaders for pastoral training. Through the generosity of our streams, we witnessed incredible spiritual and physical renewal in the community of Jinja.
        </p>
        <div class="border border-secondary/30 bg-white/5 rounded-xl p-4 mb-6 backdrop-blur-sm">
          <div class="flex justify-between items-center mb-2">
            <span class="font-label-md text-on-primary">Current Goal: Clean Water Initiative</span>
            <span class="text-secondary-fixed font-bold">75%</span>
          </div>
          <div class="w-full bg-primary-container h-2 rounded-full overflow-hidden">
            <div class="bg-secondary-fixed h-full rounded-full w-[75%] relative overflow-hidden">
              <div class="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>
        </div>
        <div class="flex gap-4">
          <a href="#/give" class="bg-secondary text-on-secondary-container px-6 py-3 rounded-lg font-label-md text-label-md shadow-soft transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,224,136,0.3)]">
            Support This Mission
          </a>
          <a href="#/missions" class="bg-transparent text-on-primary border border-surface-variant/30 px-6 py-3 rounded-lg font-label-md text-label-md transition-all duration-300 hover:bg-white/10">
            Read Report
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
`;
};

window.initHome = function () {
  var canvas = document.getElementById("shader-canvas-home");
  if (canvas && window.initShader) window.initShader(canvas);
};
