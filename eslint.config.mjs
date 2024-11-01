import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';
import typescriptParser from '@typescript-eslint/parser';
import spellcheckPlugin from 'eslint-plugin-spellcheck';

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      prettier: prettierPlugin,
      spellcheck: spellcheckPlugin,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'prettier/prettier': 'error',
      'no-console': 'off',
      'no-unused-vars': 'warn',
    },
  },
];
