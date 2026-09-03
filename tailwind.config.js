/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Core brand palette (see DESIGN.md for rationale)
        primary: '#0B3C5D', // Deep Ocean Blue
        'primary-dark': '#00263F',
        secondary: '#3AA6D9', // Sky / River Blue
        accent: '#F2A93B', // Sunrise Gold (CTAs only)
        'accent-hover': '#e09b35',
        success: '#2E8B57', // Sea Green - impact metrics
        surface: '#FAFAF8', // Off-white background
        'surface-container': '#F4F4F2',
        'surface-container-high': '#E8E8E6',
        ink: '#1F2937', // body text
        'ink-muted': '#42474E',
        navy: '#08283F', // dark section background / footer
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        body: ['"Source Sans 3"', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      borderRadius: {
        card: '1rem',
      },
    },
  },
  plugins: [],
}
