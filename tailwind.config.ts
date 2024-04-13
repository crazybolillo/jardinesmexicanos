import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  darkMode: "media",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      spacing: {
        "104": "26rem",
        "112": "28rem",
        "120": "30rem",
        "128": "32rem",
        "136": "36rem",
        "160": "40rem",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
