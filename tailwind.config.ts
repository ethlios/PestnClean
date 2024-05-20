import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            primaryColor: '#0274be',
            gray: '#dbdde2',
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            height: {
                '300': '300px',
            },
        },
        screens: {
            //Breakpoints
            sm: '640px',
            md: '768px',
            fix: '1100px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                md: '3rem',
                fix: '3.5rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '100px',
            },
        },
        fontFamily: {
            system: 'Merriweather',
        },
    },
    plugins: [],
};
export default config;
