module.exports = {
  plugins: ['jsx-a11y'],
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    './index.js',
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
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 1,
  }
}
