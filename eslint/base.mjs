// Base settings

import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'

export default [
  // Extend recommended rules
  {
    plugins: { import: importPlugin },
    rules: {
      ...importPlugin.configs['recommended'].rules,
    },
  },
  {
    files: ['**/*.js'],
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': 'warn',
    },
  },
  eslintConfigPrettier,
]
