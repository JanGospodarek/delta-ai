module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#171717",
        },
        text: {
          primary: "#ffffff",
          pinkTransparent: "#EAB5FF70",
          transparent: "#ffffff90",
        },
        components: {
          primary: "#570B72",
          primaryTransparent: "#570B7280",
        },
      },
    },
  },
  variants: { extend: {} },
  plugins: [],
};
