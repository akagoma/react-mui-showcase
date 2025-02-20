import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-config-prettier'
import jsdoc from 'eslint-plugin-jsdoc'
import prettierPlugin from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import security from 'eslint-plugin-security'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    name: '@akagoma/ignores',
    ignores: ['dist', 'node_modules', '.storybook', '*.config.js']
  },
  {
    name: '@akagoma/eslint-config',
    extends: [js.configs.recommended, stylistic.configs.recommended, ...tseslint.configs.recommended, tseslint.configs.strictTypeChecked, tseslint.configs.stylisticTypeChecked, security.configs.recommended, prettier],
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
      prettier: prettierPlugin,
      '@stylistic': stylistic,
      jsdoc: jsdoc
    },
    rules: {
      // default rule
      ...reactHooks.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...jsdoc.configs.recommended.rules,

      // prettier
      'prettier/prettier': 'error',

      // eslint
      eqeqeq: 'warn',
      'no-self-compare': 'error',
      'no-useless-concat': 'error',
      'no-unneeded-ternary': 'error',
      'no-else-return': 'warn',

      // // stylistic
      '@stylistic/indent': ['error', 2],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/space-in-parens': 'error',
      '@stylistic/arrow-spacing': 'error',
      '@stylistic/array-bracket-spacing': 'error',
      '@stylistic/computed-property-spacing': 'error',
      '@stylistic/object-curly-spacing': ['error', 'never'],
      '@stylistic/comma-spacing': ['error', {before: false, after: true}],
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/space-infix-ops': 'error',
      '@stylistic/keyword-spacing': 'error',
      '@stylistic/key-spacing': 'error',
      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/block-spacing': ['error', 'never'],
      '@stylistic/quote-props': ['error', 'as-needed'],

      // typescript-eslint
      '@typescript-eslint/dot-notation': 'warn',
      '@typescript-eslint/no-loop-func': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true
        }
      ],
      '@typescript-eslint/no-non-null-assertion': 'warn',

      // security
      'security/detect-object-injection': 'off',

      // react
      'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-indent': ['error', 2],
      '@stylistic/jsx-quotes': ['error', 'prefer-single']
    }
  }
)
