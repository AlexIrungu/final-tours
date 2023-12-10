/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      // Add the brown color to the colors object
      customWhite: '#FFFFFF',
      brown: {
        600: '#8B4513', // Replace this hex code with the brown color you want
      },
      blue: {
        500: '#3B82F6', // Replace this with your desired blue color value
      },
      orange: {
        500: "#F97316",
        600: "#EA580C",
        700: "#C2410C",
      },
      gray: {
        700: '#4B5563', // Replace this with your desired gray color value
      },
      green: {
        50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e', // Default green shade
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
      },
      gray: {
        200: "#EDF2F7",
      },
      // Other colors...
       // Add the green color to the colors object
    green: {
      600: '#10B981', // Replace this hex code with the green color you want
    },
    },
  },
  plugins: [],
  fontFamily: {
    miandra: ['Miandra GD', 'sans']
  }
};

