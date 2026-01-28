/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#172554',
        },
        success: {
          DEFAULT: '#16a34a',
          light: '#dcfce7',
          border: '#22c55e',
        },
        warning: {
          DEFAULT: '#f59e0b',
          light: '#fef3c7',
          border: '#fbbf24',
        },
        danger: {
          DEFAULT: '#dc2626',
          light: '#fee2e2',
          border: '#ef4444',
        },
        background: '#f1f5f9',
        card: '#ffffff',
        border: '#e5e7eb',
        textPrimary: '#0f172a',
        textSecondary: '#475569',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
