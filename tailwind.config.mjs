/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens: {
      sm: "340px",
      // => @media (min-width: 640px) { ... }
      smd: "450px",
      // => @media (min-width: 640px) { ... }
      md: "609px",
      // => @media (min-width: 768px) { ... }
      lg: "805px",
      // => @media (min-width: 1024px) { ... }
      xl: "1020px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
