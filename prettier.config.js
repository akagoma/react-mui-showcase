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
  importOrder: ['^(react/(.*)$)|^(react$)', '^@mui/(.*)$', '<THIRD_PARTY_MODULES>', '^\.\./', '^[./]'],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: false,
  plugins: ['@trivago/prettier-plugin-sort-imports']
}
