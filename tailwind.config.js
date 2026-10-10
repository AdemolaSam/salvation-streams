/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT'

export default withMT({
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Rebrand: high-contrast BLACK canvas + RED signal + WHITE type.
        //  - surface/surface-container are the near-black page + panel surfaces.
        //  - Red (primary) is the single accent — links, icons, CTAs, emphasis.
        //  - Text is off-white (ink) on black; never pure black-on-black.
        //  - On a red fill, text is always white.
        primary: '#E50914',          // signal red — brand, links, icons, CTAs
        'primary-dark': '#B0060F',   // deep crimson — hover / pressed
        secondary: '#FF4D5E',        // bright strawberry — glows + accents on black
        accent: '#E50914',           // red highlight (badges, numbers, rules)
        'accent-hover': '#B0060F',
        success: '#22C55E',
        surface: '#08080A',          // page canvas — near black
        'surface-container': '#141418',
        'surface-container-high': '#212128',
        ink: '#FAFAFA',              // off-white body copy
        'ink-muted': '#9A9AA6',      // grey secondary copy
        navy: '#000000',             // pure-black dark sections / footer
      },
      fontFamily: {
        heading: ['"Righteous"', 'ui-sans-serif', 'sans-serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      borderRadius: {
        card: '1rem',
      },
      boxShadow: {
        card: '0 1px 0 rgba(255,255,255,0.03) inset, 0 18px 40px -24px rgba(0,0,0,0.9)',
        lift: '0 30px 60px -28px rgba(0,0,0,0.95)',
        glow: '0 0 48px -8px rgba(229,9,20,0.65)',
        'glow-sm': '0 0 22px -6px rgba(229,9,20,0.7)',
      },
      transitionTimingFunction: {
        enter: 'cubic-bezier(0.05, 0.7, 0.1, 1.0)',
        exit: 'cubic-bezier(0.3, 0, 0.8, 0.15)',
        move: 'cubic-bezier(0.2, 0, 0, 1)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.96)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'slide-down': {
          from: { opacity: '0', transform: 'translateY(-10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-120%)' },
          '60%, 100%': { transform: 'translateX(220%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '100%': { transform: 'scale(1.7)', opacity: '0' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.05,0.7,0.1,1) both',
        'fade-in': 'fade-in 0.8s ease-out both',
        'scale-in': 'scale-in 0.6s cubic-bezier(0.05,0.7,0.1,1) both',
        'slide-down': 'slide-down 0.3s cubic-bezier(0.05,0.7,0.1,1) both',
        marquee: 'marquee 30s linear infinite',
        shimmer: 'shimmer 2.6s ease-in-out infinite',
        float: 'float 7s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.4s ease-out infinite',
        'gradient-pan': 'gradient-pan 8s ease infinite',
      },
    },
  },
  plugins: [],
})
