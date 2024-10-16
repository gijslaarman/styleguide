// react.js
import reactRecommended from 'eslint-plugin-react/configs/recommended'
import reactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime' // For JSX runtime

export default [
  {
    files: ['**/*.jsx', '**/*.tsx'], // Apply to both JSX and TSX files
    languageOptions: {
      globals: {
        React: 'writable', // For environments where React is auto-imported
      },
    },
    plugins: {
      react: reactRecommended.plugins.react, // Enable React plugin
    },
    rules: {
      ...reactRecommended.rules, // Apply React recommended rules
      ...reactJsxRuntime.rules, // Apply JSX runtime rules if using React 17+

      // Additional React-Specific Rules
      'react/jsx-uses-react': 'off', // Disable since React 17+ does not require import
      'react/react-in-jsx-scope': 'off', // Disable because React 17+ JSX transforms don't require React in scope
      'react/prop-types': 'off', // Turn off prop-types as TypeScript handles types
      'react/jsx-no-target-blank': 'warn', // Warn about `target="_blank"` without `rel="noreferrer"`
      'react/jsx-no-duplicate-props': 'error', // Disallow duplicate props in JSX
      'react/jsx-key': 'error', // Ensure that arrays or iterators in JSX have `key` prop
    },
  },
]
