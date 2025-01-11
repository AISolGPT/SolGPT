module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      scale: {
        '150': '1.5',
        '200': '2',
        '250': '2.5',
      },
    },
  },
  plugins: [
    require('daisyui'),
    require("@tailwindcss/typography")
  ],
  daisyui: {
    styled: true,
    themes: [
      {
        'solana': {
          fontFamily: {
            display: ['PT Mono, monospace'],
            body: ['Inter, sans-serif'],
          },
          'primary': '#2a2a2a',
          'primary-focus': '#9945FF',
          'primary-content': '#ffffff',
          'secondary': '#f6d860',
          'secondary-focus': '#f3cc30',
          'secondary-content': '#ffffff',
          'accent': '#33a382',
          'accent-focus': '#2aa79b',
          'accent-content': '#ffffff',
          'neutral': '#2b2b2b',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#181818',
          'base-200': '#35363a',
          'base-300': '#222222',
          'base-content': '#f9fafb',
          'info': '#2094f3',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
