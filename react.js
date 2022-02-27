module.exports = {
  plugins: ['jsx-a11y'],
  extends: [
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  parserOptions: {
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  env: {
    'browser': true,
    'node': true,
    'es6': true,
  },
  rules: {
    'react/prop-types': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'react/function-component-definition': [2, { 'namedComponents': 'arrow-function' }],
  }
}
