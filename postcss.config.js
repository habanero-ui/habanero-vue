module.exports = {
  plugins: [require('tailwindcss'), require('autoprefixer')],
  presets: [
    [
      require('postcss-preset-env'),
      {
        browsers: 'last 2 versions',
        features: {
          'nesting-rules': true,
        },
      },
    ],
  ],
}
