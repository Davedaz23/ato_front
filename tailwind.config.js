module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Updated for Tailwind 3+
  darkMode: 'class', // Enables dark mode via the 'class' strategy
  theme: {
    extend: {
      keyframes: {
        animation: {
          scroll: "scroll 35s linear infinite",
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        scroll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 3s ease-out forwards',
      },
      width: {
        '1/8': '12.5%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // Uncomment if you plan to use these
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};
