/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    container: {
        center: true,
        padding: '16px',
    },
    extend: {
        colors: {
            primary: '#0ea5e9',
            secondary: '#64748b',
            dark_primary: '#0c4a6e',
        },
        screens: {
            '2xl': '1320px',
        }
    },
  },
  plugins: [],
}

