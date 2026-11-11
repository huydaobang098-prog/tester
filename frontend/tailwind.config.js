/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        codeDark: "#0F172A",
        codePanel: "#1E1E1E",
        codePrimary: "#6366F1",
        codeGreen: "#10B981"
      }
    }
  },
  plugins: []
}