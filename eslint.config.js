import js from "@eslint/js";
import globals from "globals";
import jestPlugin from "eslint-plugin-jest";

export default [

  {
    ignores: ["dist/**", "coverage/**", "node_modules/**"]
  },

  js.configs.recommended,
  
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "semi": ["error", "always"],
      "indent": ["error", 2],
    },
  },

  {
    files: ["**/*.test.js"], 
    plugins: {
      jest: jestPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.jest, 
      },
    },
    rules: {
      ...jestPlugin.configs.recommended.rules,
      "jest/prefer-expect-assertions": "off",
    },
  },
];