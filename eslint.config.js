import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'
import stylistic from '@stylistic/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default tseslint.config(
  {ignores: ['dist', 'node_modules']},
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      stylistic.configs.recommended,
      // tseslint.configs.strictTypeChecked,
      // tseslint.configs.stylisticTypeChecked
      prettier
    ],
    files: ['**/*.{js,ts,tsx}'],
    languageOptions: {
      sourceType: 'module',
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        tsconfigRootDir: process.cwd(),
        // project: ['./tsconfig.json']
      }
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettierPlugin,
      stylistic: stylistic
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],
      // prettier
      'prettier/prettier': 'error',
      // stylistic
      indent: 'off',
      '@stylistic/indent': ['error', 2],
      semi: 'off',
      '@stylistic/semi': ['error', 'never'],
      'max-len': 'off',
      '@stylistic/max-len': 'off',
      'no-multi-spaces': 'off',
      '@stylistic/no-multi-spaces': 'error',
      'space-in-parens': 'off',
      '@stylistic/space-in-parens': 'error',
      'arrow-spacing': 'off',
      '@stylistic/arrow-spacing': 'error',
      'array-bracket-spacing': 'off',
      '@stylistic/array-bracket-spacing': 'error',
      'computed-property-spacing': 'off',
      '@stylistic/computed-property-spacing': 'error',
      'object-curly-spacing': 'off',
      '@typescript-eslint/object-curly-spacing': 'off',
      '@stylistic/object-curly-spacing': ['error', 'never'],
      'comma-spacing': 'off',
      '@typescript-eslint/comma-spacing': 'off',
      '@stylistic/comma-spacing': ['error', {before: false, after: true}],
      'comma-dangle': 'off',
      '@stylistic/comma-dangle': ['error', 'never'],
      'space-infix-ops': 'off',
      '@stylistic/space-infix-ops': 'error',
      'keyword-spacing': 'off',
      '@typescript-eslint/keyword-spacing': 'off',
      '@stylistic/keyword-spacing': 'error',
      'key-spacing': 'off',
      '@stylistic/key-spacing': 'error',
      'brace-style': 'off',
      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/type-annotation-spacing': 'off',
      '@stylistic/block-spacing': ['error', 'never'],
      '@stylistic/quote-props': ['error', 'as-needed'],
    }
  }
)
