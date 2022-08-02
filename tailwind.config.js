module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './src/components/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: [
        "selection"
      ],
      backgroundColor: [
        "selection"
      ],
      colors: {
        'baby-powder': '#FCFFFC',
        'outer-space-crayola': '#2D3A3A',
        'green-pantone': '#2BA84A',
        'forest-green-web': '#248232',
        'rich-black': '#040F0F'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-selection-variant")
  ],
}
