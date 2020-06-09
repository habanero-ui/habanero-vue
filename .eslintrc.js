module.exports = {
  root: true,
  extends: [
    'plugin:prettier/recommended',
    'standard',
    'eslint:recommended',
    'plugin:vue/recommended',
    'prettier',
    'prettier/vue',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: ['prettier', 'vue'],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'vue/attribute-hyphenation': ['error', 'never'],
    'vue/no-v-html': 0,
  },
}
