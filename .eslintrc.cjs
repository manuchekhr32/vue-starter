module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-typescript',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: [
        'src/**/*.{vue,js,ts,json}',
        'vite.config.{js,ts}',
        '.eslintrc.{js,cjs}',
      ],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'vue', 'simple-import-sort'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    quotes: ['warn', 'single'],
    semi: ['warn', 'never'],
    'no-undef': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': 'warn',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
}
