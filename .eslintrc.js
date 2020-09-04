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
  plugins: ['prettier', 'simple-import-sort', 'vue'],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'no-console': 1,
    'vue/attribute-hyphenation': ['error', 'never'],
    'vue/no-v-html': 0,
    'vue/sort-keys': ['error', 'asc', { caseSensitive: false }],
    'simple-import-sort/sort': 'error',
  },
}
