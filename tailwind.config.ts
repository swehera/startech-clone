import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        headerColor: "#081621",
        orangeColor: "#EF4A23",
        purpoleColor: "#6E2594",
        grayTextColor: "rgba(255,255,255,.5)",
        yellowColor: "#FFE8A1",
        sideBorderColor: "#3749bb",
        cartBgColor: "#081621",
        cartBgHoverColor: "#3749bb",
      },
    },
  },
  plugins: [],
};
export default config;
