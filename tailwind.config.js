// tailwind.config.js
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'axis-magenta': '#EC008C',
                'axis-light-purple': '#B41E8E',
                'axis-dark-purple': '#662D91',
                'axis-royal-blue': '#262262',
                'axis-blue': '#006CB3',
                'axis-green': '#00A496',
                'axis-charcoal': '#3C4247',
                'axis-grey-mid': '#606A70',
                'axis-grey-light': '#C4CED4',
            },
        },
    },
    plugins: [],
}