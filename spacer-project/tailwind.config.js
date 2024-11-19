/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(0, 0%, 100%)', // Light mode background
        foreground: 'hsl(240, 10%, 3.9%)', // Light mode foreground
        card: 'hsl(0, 0%, 100%)',
        'card-foreground': 'hsl(240, 10%, 3.9%)',
        popover: 'hsl(0, 0%, 100%)',
        'popover-foreground': 'hsl(240, 10%, 3.9%)',
        primary: 'hsl(240, 5.9%, 10%)',
        'primary-foreground': 'hsl(0, 0%, 98%)',
        secondary: 'hsl(240, 4.8%, 95.9%)',
        'secondary-foreground': 'hsl(240, 5.9%, 10%)',
        muted: 'hsl(240, 4.8%, 95.9%)',
        'muted-foreground': 'hsl(240, 3.8%, 46.1%)',
        accent: 'hsl(240, 4.8%, 95.9%)',
        'accent-foreground': 'hsl(240, 5.9%, 10%)',
        destructive: 'hsl(0, 84.2%, 60.2%)',
        'destructive-foreground': 'hsl(0, 0%, 98%)',
        border: 'hsl(240, 5.9%, 90%)',
        input: 'hsl(240, 5.9%, 90%)',
        ring: 'hsl(240, 10%, 3.9%)',
        'dark-background': 'hsl(240, 10%, 3.9%)', // Dark mode background
        'dark-foreground': 'hsl(0, 0%, 98%)',
      },
      borderColor: theme => ({
        DEFAULT: theme('colors.border'), // Set the default border color
      }),
      animation: {
        fadeInUp: 'fadeInUp 0.5s ease-out',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
      borderRadius: {
        DEFAULT: '0.5rem', // Default border radius
      },
    },
  },
  plugins: [],
};
