/** @type {import('prettier').Config} */
const config = {
  semi: false,
  printWidth: 80,
  singleQuote: true,
  plugins: ["prettier-plugin-packagejson"],
};

module.exports = config;
