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
    'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    indent: ['error', 4],
    'space-before-function-paren': ['error', 'never'],
    'key-spacing': ['error', {
        beforeColon: true,
        afterColon: true,
        mode: 'minimum',
        align: {
            beforeColon: true,
            afterColon: true,
            on: 'colon'
        }
    }],
    semi: ['error', 'always'],
    'keyword-spacing': ['error', {
        before: true,
        after: true
    }],
    'brace-style': ['error', 'stroustrup']
  }
}
