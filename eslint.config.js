import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHook from "eslint-plugin-react-hooks";
import pluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import jsxA11y from "eslint-plugin-jsx-a11y";
import unusedImports from "eslint-plugin-unused-imports";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
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
      "prettier/prettier": {
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
    },
  },
  jsxA11y.configs.recommended,
  {
    plugins: { "unused-imports": unusedImports },
    rules: { "unused-imports/no-unused-imports-ts": "error" },
  },
  {
    plugins: { "simple-import-sort": simpleImportSort },
    rules: { "simple-import-sort/imports": "error", "simple-import-sort/exports": "error" },
  },
];
