import pluginJs from "@eslint/js";
import jsxA11y from "eslint-plugin-jsx-a11y";
import pluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginReact from "eslint-plugin-react";
import pluginReactHook from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    settings: { react: { version: "19" } },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/jsx-first-prop-new-line": "error",
      "react/self-closing-comp": ["error", { component: true, html: true }],
      "react/no-unknown-property": "error",
    },
  },
  pluginReactHook.configs["recommended-latest"],
  {
    ...pluginPrettierRecommended,
    rules: {
      "prettier/prettier": [
        "error",
        {
          useTabs: false,
          printWidth: 120,
          tabWidth: 2,
          singleQuote: false,
          jsxSingleQuote: false,
          semi: true,
          bracketSpacing: true,
          jsxBracketSameLine: false,
          quoteProps: "as-needed",
          trailingComma: "all",
          arrowParens: "always",
          proseWrap: "never",
          endOfLine: "auto",
        },
      ],
    },
  },
  jsxA11y.flatConfigs.recommended,
  {
    plugins: { "unused-imports": unusedImports },
    rules: { "unused-imports/no-unused-imports": "error" },
  },
  {
    plugins: { "simple-import-sort": simpleImportSort },
    rules: { "simple-import-sort/imports": "error", "simple-import-sort/exports": "error" },
  },
];
