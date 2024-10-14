/**
 * @param {string} functionsPathName - optional
 */
export default () => ({
  customSyntax: 'postcss-scss',
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['mixin', 'define-mixin'],
      },
    ],
    // Use this in your own project, to extend the list of functions.
    // 'function-no-unknown': [
    //   true,
    //   {
    //     ignoreFunctions: functionNames,
    //   },
    // ],
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements'],
      },
    ],
  },
})
