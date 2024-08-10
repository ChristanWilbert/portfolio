/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        HNlight: "HelNeu-Light",
        HNheavy: "HelNeu-Heavy",
        HNmed: "HelNeu-Med",
        HNmedItc: "HelNeu-Med-Itc",
        HNbold: "HelNeu-Bld",
        HNthin: "HelNeu-Thin",
        sansita: "Sansita-Reg",
        jost: "Jost-Reg",
      },
    },
  },
  plugins: [],
};
