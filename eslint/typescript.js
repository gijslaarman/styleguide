// typescript.js
import typescriptEslintRecommended from '@typescript-eslint/eslint-plugin/configs/recommended'
import typescriptParser from '@typescript-eslint/parser'

export default [
  {
    files: ['**/*.ts', '**/*.tsx'], // Apply only to TypeScript files
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json', // Point to your tsconfig.json
        sourceType: 'module',
      },
    },
    rules: {
      ...typescriptEslintRecommended.rules, // Extend TypeScript-specific rules

      // TypeScript-Specific Best Practices
      '@typescript-eslint/consistent-type-imports': 'error', // Enforce consistent type imports
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ], // Allow unused vars prefixed with `_`
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Turn off explicit return types for module boundaries
      'tsdoc/syntax': 'warn', // https://tsdoc.org/
    },
  },
]
