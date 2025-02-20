export default {
  printWidth: 99999999,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'none',
  bracketSpacing: false,
  endOfLine: 'lf',
  singleAttributePerLine: false,
  // https://tech-broccoli.life/articles/engineer/use-prettier-plugin-sort-imports
  plugins: ['@trivago/prettier-plugin-sort-imports']
}
