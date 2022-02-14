module.exports = {
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  env: {
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json",
      }
    }
  },
  rules: {
    // Basic
    curly: ['error', 'multi-line'],
    eqeqeq: 'error',
    'no-eq-null': 'error',
    'no-nested-ternary': 'error',
    'no-console': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'no-param-reassign': 'warn',

    // Style
    'max-len': ['error', { code: 120, ignoreTemplateLiterals: true, ignoreUrls: true, ignoreStrings: true }],
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'no-trailing-spaces': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'prefer-template': 'error',
    'key-spacing': 'error',
    'eol-last': ['error', 'always'],

    // Imports
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    'no-duplicate-imports': 'error',

    // Typescript
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/brace-style': ['error', '1tbs'],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'angle-bracket' }],
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['if', 'interface', 'type'], next: ['*']},
      { blankLine: 'always', prev: ['*'], next: ['if', 'return', 'interface', 'type']},
    ],
  },
}
