import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'
import tsParser from '@typescript-eslint/parser'
import typescript from '@typescript-eslint/eslint-plugin'
import security from 'eslint-plugin-security'
import stylistic from '@stylistic/eslint-plugin'
import storybook from 'eslint-plugin-storybook'

export default tseslint.config(
  {
    name: '@akagoma/ignores',
    ignores: ['dist', 'node_modules', '.storybook', '*.config.js']
  },
  {
    name: '@akagoma/eslint-config',
    extends: [
      js.configs.recommended,
      stylistic.configs.recommended,
      ...tseslint.configs.recommended,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      security.configs.recommended,
      prettier
    ],
    files: ['**/*.{js,ts,tsx}'],
    settings: {
      react: {
        version: 'detect'
      }
    },
    languageOptions: {
      globals: globals.browser,
      sourceType: 'module',
      ecmaVersion: 2022,
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        project: ['./tsconfig.json']
      }
    },
    plugins: {
      react: react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      security: security,
      typescript: typescript,
      prettier: prettierPlugin,
      stylistic: stylistic
    },
    rules: {
      // default rule
      ...reactHooks.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...storybook.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],

      // prettier
      'prettier/prettier': 'error',

      // eslint
      eqeqeq: 'warn',
      'no-self-compare': 'error',
      'no-useless-concat': 'error',
      // 'no-spaced-func': 'error',
      'no-var': 'warn',
      'no-unneeded-ternary': 'error',
      'no-else-return': 'warn',
      // 'quote-props': 'off',

      // // stylistic
      // indent: 'off',
      '@stylistic/indent': ['error', 2],
      // semi: 'off',
      '@stylistic/semi': ['error', 'never'],
      // 'max-len': 'off',
      // '@stylistic/max-len': 'off',
      // 'no-multi-spaces': 'off',
      // '@stylistic/no-multi-spaces': 'error',
      // 'space-in-parens': 'off',
      // '@stylistic/space-in-parens': 'error',
      // 'arrow-spacing': 'off',
      // '@stylistic/arrow-spacing': 'error',
      // 'array-bracket-spacing': 'off',
      // '@stylistic/array-bracket-spacing': 'error',
      // 'computed-property-spacing': 'off',
      // '@stylistic/computed-property-spacing': 'error',
      // 'object-curly-spacing': 'off',
      // '@typescript-eslint/object-curly-spacing': 'off',
      // '@stylistic/object-curly-spacing': ['error', 'never'],
      // 'comma-spacing': 'off',
      // '@typescript-eslint/comma-spacing': 'off',
      // '@stylistic/comma-spacing': ['error', {before: false, after: true}],
      // 'comma-dangle': 'off',
      // '@stylistic/comma-dangle': ['error', 'never'],
      // 'space-infix-ops': 'off',
      // '@stylistic/space-infix-ops': 'error',
      // 'keyword-spacing': 'off',
      // '@typescript-eslint/keyword-spacing': 'off',
      // '@stylistic/keyword-spacing': 'error',
      // 'key-spacing': 'off',
      // '@stylistic/key-spacing': 'error',
      // 'brace-style': 'off',
      // '@stylistic/brace-style': ['error', '1tbs'],
      // '@stylistic/arrow-parens': ['error', 'always'],
      // '@stylistic/type-annotation-spacing': 'off',
      // '@stylistic/block-spacing': ['error', 'never'],
      // '@stylistic/quote-props': ['error', 'as-needed'],
      // // typescript-eslint
      // 'dot-notation': 'off',
      // '@typescript-eslint/dot-notation': 'warn',
      // 'no-loop-func': 'off',
      // '@typescript-eslint/no-loop-func': 'warn',
      // '@typescript-eslint/no-explicit-any': 'warn',
      // '@typescript-eslint/no-unsafe-argument': 'warn',
      // '@typescript-eslint/no-unsafe-assignment': 'warn',
      // '@typescript-eslint/no-unsafe-member-access': 'warn',
      // '@typescript-eslint/no-unsafe-return': 'warn',
      // '@typescript-eslint/no-unsafe-call': 'warn',
      // 'no-unused-vars': 'off',
      // '@typescript-eslint/no-unused-vars': [
      //   'error',
      //   {
      //     args: 'all',
      //     argsIgnorePattern: '^_',
      //     caughtErrors: 'all',
      //     caughtErrorsIgnorePattern: '^_',
      //     destructuredArrayIgnorePattern: '^_',
      //     varsIgnorePattern: '^_',
      //     ignoreRestSiblings: true
      //   }
      // ],
      // '@typescript-eslint/no-non-null-assertion': 'warn',
      // '@typescript-eslint/no-unsafe-assignment': 'off',
      // // security
      // 'security/detect-object-injection': 'off',
      // // react
      // 'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],
      // '@typescript-eslint/explicit-module-boundary-types': 'warn',
      // 'react/jsx-uses-react': 'off',
      // 'react/react-in-jsx-scope': 'off',
      // 'react/jsx-indent': 'off',
      // 'react/jsx-one-expression-per-line': 0,
      // '@stylistic/jsx-indent': ['error', 2],
      // '@stylistic/jsx-quotes': ['error', 'prefer-single'],
      // '@stylistic/jsx-one-expression-per-line': 'off'
    }
  }
)
