module.exports = {
  // set enabled true for production, false for normal (lin2 2-8)
  purge: {
    enabled: false,
    content: [
      './dist/*.html',
      './dist/*.js'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
