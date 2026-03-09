// import js from '@eslint/js'
// import globals from 'globals'
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'
// import tseslint from 'typescript-eslint'
// import { defineConfig, globalIgnores } from 'eslint/config'

// export default defineConfig([
//   globalIgnores(['dist']),
//   {
//     files: ['**/*.{ts,tsx}'],
//     extends: [
//       js.configs.recommended,
//       tseslint.configs.recommended,
//       reactHooks.configs.flat.recommended,
//       reactRefresh.configs.vite,
//     ],
//     ignores: [
//       "node_modules", 
//       "dist", 
//       "build", 
//       "coverage", // 👈 ignore coverage reports
//     ],
//     rules: { 
//       // optional: if you want to globally disable the warning 
//       "no-unused-disable": "off", 
//     },
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//     },
//   },
// ])


import js from '@eslint/js';
import sonarjs from "eslint-plugin-sonarjs";
import globals from 'globals';
import reactPlugin from "eslint-plugin-react";
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores([
    'dist',
    'node_modules',
    'coverage'
  ]),
  {
    files: ['**/*.{ts,tsx, js, jsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
      sonarjs,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // Approximate GTS rules
      // "quotes": ["error", "double"],
      // "semi": ["error", "always"],
      // "indent": ["error", 2],
      // "no-unused-vars": "error",
      "no-console": "warn",

      // SonarJS rules
      "sonarjs/no-duplicate-string": "warn",
      "sonarjs/cognitive-complexity": ["warn", 15],

      // React rules
      "react/jsx-uses-react": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
    settings: {
      react: { version: "detect" },
    }
  },
])