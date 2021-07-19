const colors = require('tailwindcss/colors')

module.exports = {
    theme: {
        extend: {
            width: {
                'login_text': '39px',
            },
            height: {
                'gh': '5px',
                'nav': '67px',
                'login_text': '19px',
                'footer': '88px'
            },
            gradientColorStops: theme => ({
                ...theme('colors'),
                'primary': '#319795',
                'secondary': '#3182ce',
            }),
            borderRadius: {
                'br': '12px'
            },
            boxShadow: {
                '3xl': '0 3px 6px #00000029',
                '4xl': '0px -1px 3px #00000033',
            },
            colors: {
                'user': '#319795'
            },
            margin: {
                'login_t': '26px',
                'login_l': '304px',
                'footer_t': '556px',
            },
            fontFamily: {
                'sans': ['Lato', 'Sans-serif']
            },
            keyframes: {
                'fade-in-down': {
                    '0%': {
                        opacity: '0',
                    },
                    '100%': {
                        opacity: '1',
                    },
                }
            },
            animation: {
                'fade-in-down': 'fade-in-down 0.3s ease-out'
            }
        },
    },
    variants: {
        extend: {
            boxShadow: ['active'],
        }
    }
}