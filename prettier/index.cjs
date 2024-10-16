/** @type {import('prettier').Config} */
const config = {
  semi: false,
  tabWidth: 2,
  printWidth: 80,
  singleQuote: true,
  plugins: ['prettier-plugin-packagejson'],
}

module.exports = config
