/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                satoshi: ["Satoshi", "sans-serif"],
                inter: ["Inter", "sans-serif"],
            },
            colors: {
                "primary-orange": "#FF5722",
            },
        },
    },
    plugins: [],
};
