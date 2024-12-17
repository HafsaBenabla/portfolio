/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'bg-dark': '#0f172a',
                'primary': '#8B5CF6',
                'secondary': '#4C1D95',
                'text-gray': '#94A3B8',
                'card': 'rgba(255, 255, 255, 0.05)',
                'hover': 'rgba(255, 255, 255, 0.1)'
            },
            keyframes: {
                slide: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(-100%)' }
                },
                border: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' }
                }
            },
            animation: {
                'slide': 'slide 20s linear infinite',
                'border': 'border 4s ease infinite',
                'float': 'float 3s ease-in-out infinite',
                'pause-on-hover': 'slide 20s linear infinite paused'
            },
            backgroundImage: {
                'dots-pattern': 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                'gradient-primary': 'linear-gradient(135deg, #8B5CF6 0%, #4C1D95 100%)'
            },
            backgroundSize: {
                'dots': '24px 24px'
            }
        },
    },
    plugins: [],
}