/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          navy: {
            900: '#0A1628',
            800: '#111D2E',
            700: '#1E293B',
            600: '#334155',
          },
          amber: {
            500: '#D97706',
            400: '#F59E0B',
            300: '#FBBF24',
          },
          warm: {
            50: '#FAFAF9',
            100: '#F5F5F4',
            200: '#E7E5E4',
          }
        },
        fontFamily: {
          pretendard: ['Pretendard', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }