/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
   keyframes: {
    marquee: {
      '0%': { transform: 'translateX(100%)' },
      '100%': { transform: 'translateX(-100%)' },
    },
  },
  animation: {
    marquee: 'marquee 15s linear infinite',
  },
 extend: {
  keyframes: {
    marquee: {
      "0%": { transform: "translateX(0%)" },
      "100%": { transform: "translateX(-100%)" },
    },
    float: {
      "0%, 100%": { transform: "translateY(0px)" },
      "50%": { transform: "translateY(-6px)" },
    },
  },
  animation: {
    marquee: "marquee 20s linear infinite",
    float: "float 4s ease-in-out infinite",
  },
},  
  plugins: [],
};
