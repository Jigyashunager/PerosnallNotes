import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next",
      "next/typescript",
      "prettier",
      "plugin:@typescript-eslint/recommended",
      "plugin:jsx-a11y/recommended",
      "plugin:import/recommended",
      "plugin:import/typescript",
    ],
    plugins: ["@typescript-eslint", "jsx-a11y", "import"],
    rules: {
      // ✅ General Spacing Rules
      "semi": ["error"],
      "indent": ["error", 2], // Enforce 2-space indentation
      "no-multi-spaces": "error", // Disallow multiple spaces except for alignment
      "no-trailing-spaces": "error", // Disallow trailing spaces
      "space-in-parens": ["error", "never"], // No spaces inside parentheses
      // For the function parentheses error
      "space-before-function-paren": ["error", {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }],

      // For the JSX curly spacing error
      "react/jsx-curly-spacing": ["error", {
        "when": "never",
        "children": false
      }],
      "keyword-spacing": ["error", { "before": true, "after": true }], // Enforce spaces around keywords
      "arrow-spacing": ["error", { "before": true, "after": true }], // Space before/after `=>` in arrow functions
      "object-curly-spacing": ["error", "always"], // Space inside `{}` for objects
      "array-bracket-spacing": ["error", "never"], // No space inside `[]`
      "block-spacing": ["error", "always"], // Space inside `{}` for single-line blocks
      "comma-spacing": ["error", { "before": false, "after": true }], // Ensure space after `,`
      "semi-spacing": ["error", { "before": false, "after": true }], // Ensure space after `;`

      // ✅ Prevent Excessive Blank Lines
      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1, "maxBOF": 0 }], // No more than 1 consecutive blank line

      // ✅ React & Next.js Specific Rules
      "@next/next/no-html-link-for-pages": ["error", "src/pages/"],
      "react/jsx-tag-spacing": ["error", { "beforeSelfClosing": "always" }], // Space before self-closing JSX tags
      "react/jsx-indent": ["error", 2], // 2-space indent for JSX
      "react/jsx-indent-props": ["error", 2], // 2-space indent for JSX props

      // ✅ Import Order & Sorting
      "import/order": [
        "error",
        {
          "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
          "alphabetize": { "order": "asc", "caseInsensitive": true },
        },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
  }),
];

export default eslintConfig;
