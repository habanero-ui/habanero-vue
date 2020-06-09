module.exports = {
  root: true,
  extends: ['standard', 'eslint:recommended', 'plugin:vue/essential'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: ['vue'],
  env: {
    browser: true,
    node: true,
  },
  rules: {},
}
