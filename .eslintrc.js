module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'keyword-spacing': 'off',
    'no-var': 'off',
    'no-console': 'off',
    'vue/attribute-hyphenation': 'off',
    'no-unused-vars': 'off'
  }
}
