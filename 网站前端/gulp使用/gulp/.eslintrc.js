module.exports = {
  root: true,
  parserOptions: {
    'parser': 'babel-eslint'
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    'standard'
    // 'plugin:vue/essential' // .vue
  ],
  plugins: [  // 二选一
    // 'vue'  // eslint-plugin-vue
    'html'  // eslint-plugin-html
  ],
  globals: {
    // '$': false
  },
  rules: {  // 0 === 'off'; 1 === 'warn'; 2 === 'error'
    'no-multi-spaces': [2, { ignoreEOLComments: true }],
    'no-trailing-spaces': [2, { skipBlankLines: true }],
    'no-console': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'max-len': [1, { 'code': 150 }]

    // 'indent': [2, 4],
    // 'semi': [2, 'always']
  }
}
