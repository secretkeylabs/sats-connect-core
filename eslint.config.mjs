import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts}'], plugins: { js }, extends: ['js/recommended'] },
  { files: ['**/*.{js,mjs,cjs,ts}'], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,

  // Imports
  importPlugin.flatConfigs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    extends: [importPlugin.flatConfigs.typescript],
  },
  {
    // https://github.com/import-js/eslint-plugin-import?tab=readme-ov-file#typescript
    settings: {
      'import/resolver': {
        typescript: true,
      },
    },
  },

  // Unused imports and vars
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      // See https://github.com/sweepline/eslint-plugin-unused-imports?tab=readme-ov-file#usage
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',

      'unused-imports/no-unused-imports': 'error',
      // These settings would typically be provided to
      // `@typescript-eslint/no-unused-vars`. However, when using
      // `unused-imports/no-unused-vars`, it is expected to provide these
      // settings here. They'll be forwarded to other "unused" plugins.
      //
      // Typically accepted pattern for ignored variables in Typescript. See
      // https://typescript-eslint.io/rules/no-unused-vars#what-benefits-does-this-rule-have-over-typescript
      'unused-imports/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
          vars: 'all',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },

  eslintConfigPrettier,

  {
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
      'import/no-useless-path-segments': 'error',
    },
  },

  { ignores: ['dist'] },
]);
