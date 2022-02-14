module.exports = {
  plugins: ['jsx-a11y'],
  extends: [
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
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
    'jsx-quotes': ["error", "prefer-single"],
  }
}
