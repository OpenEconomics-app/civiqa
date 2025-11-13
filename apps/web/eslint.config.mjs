// apps/web/eslint.config.mjs
/** @type {import("eslint").Linter.Config[]} */

import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import importPlugin from 'eslint-plugin-import'

export default [
  // 1) Ignore junk
  {
    ignores: ['node_modules', 'dist', '.next'],
  },

  // 2) TS/TSX files config
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      // ✅ actual parser object (from @typescript-eslint/parser)
      parser: tsParser,
      parserOptions: {
        // optional but recommended for type-aware rules later
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
        tsconfigRootDir: new URL('.', import.meta.url).pathname,
      },
    },
    plugins: {
      // ✅ real plugin objects, not Promises
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
    },
    rules: {
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          alphabetize: { order: 'asc' },
          groups: [
            ['builtin', 'external', 'internal'],
            ['parent', 'sibling', 'index'],
          ],
        },
      ],
      'import/no-restricted-paths': [
        'error',
        {
          zones: [
            {
              target: './src/components',
              from: './src/server',
              message: 'UI cannot import server-only code',
            },
          ],
        },
      ],
      '@typescript-eslint/consistent-type-imports': 'error',
      'no-restricted-imports': ['error', { patterns: ['../server/*'] }],
    },
  },
]
