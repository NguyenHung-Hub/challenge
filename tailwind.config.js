/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            height: {
                25: "100px",
                100: "400px",
            },
            textColor: {
                primary: "#007AE9",
                "gray-1": "#6E798C",
                "gray-2": "#374A59",
                "black-1": "#081F32",
            },
            fontFamily: {
                "open-sans": "'Open Sans'",
                "DM-Serif-Display": "'DM Serif Display'",
            },
        },
    },
    plugins: [],
};
