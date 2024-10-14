// eslint.config.js
import eslintRecommended from 'eslint:recommended'
import eslintPrettier from 'eslint-config-prettier'
import importRecommended from 'eslint-plugin-import/config/recommended'

export default [
  // Extend recommended rules
  eslintRecommended,
  importRecommended,
  eslintPrettier,
  {
    rules: {
      // Best Practices
      eqeqeq: 'warn', // Enforce strict equality
      curly: 'error', // Require curly braces for all control statements
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Ignore unused vars starting with _

      // Code Quality
      'no-console': 'warn', // Allow console with warning
      'no-debugger': 'error', // Disallow debugger
      'prefer-const': 'error', // Prefer const for non-reassigned vars

      // Import Rules
      'import/no-unresolved': 'error', // Disallow unresolved imports
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal'],
          'newlines-between': 'always',
        },
      ],

      // Styling (delegated to Prettier, but some optional manual additions)
      'no-multiple-empty-lines': ['warn', { max: 1 }],
      'newline-before-return': 'warn',
      'no-trailing-spaces': 'error',
    },
  },
]
