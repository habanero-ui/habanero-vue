module.exports = {
  root: true,
  extends: ['standard', 'eslint:recommended', 'plugin:vue/essential'],
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
    ecmaVersion: 8,
    'no-extra-semi': false,
  },
  plugins: ['vue'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  rules: {},
}
