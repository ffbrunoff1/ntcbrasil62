/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4DADEA',
        secondary: '#ffffff',
        accent: '#2563eb',
        dark: '#1e293b',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #4DADEA 0%, #2563eb 100%)',
        'gradient-secondary':
          'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      },
      textColor: {
        gradient:
          'bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent',
      },
    },
  },
  plugins: [],
};
