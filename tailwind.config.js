/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hijau: "#1AFF00",
        kuning: "#FFF100",
        merah: "#FF2C00",
        dongker: "#2F5166",
        outlet: "#F0F2F9",
        sidebar: "#FBFBFC",
        "tombol-abu-tua": "#DDDCDC",
        "tulisan-tombol-abu-tua": "#71708F",
      },
      screens: {
        "4k": "3840px", // Tambahkan breakpoint khusus untuk layar 4K
      },
    },
  },
  plugins: [],
};
