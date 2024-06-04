import tsPlug from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-plugin-prettier'
import sisPlug from 'eslint-plugin-simple-import-sort'
import vuePlug from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

export default [
  ...vuePlug.configs['flat/essential'],
  {
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        parser: tsParser,
      },
    },
    files: [
      'src/**/*.{vue,js,ts,json}',
      'vite.config.{js,ts}',
      'eslint.config.js',
    ],
    plugins: {
      ts: tsPlug,
      vue: vuePlug,
      prettier,
      'simple-import-sort': sisPlug,
    },
    rules: {
      'linebreak-style': ['error', 'unix'],
      quotes: ['warn', 'single'],
      semi: ['warn', 'never'],
      'no-undef': 'off',
      'ts/no-unused-vars': 'warn',
      'ts/no-explicit-any': 'warn',
      'vue/multi-word-component-names': 'off',
      'prettier/prettier': 'warn',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
]
