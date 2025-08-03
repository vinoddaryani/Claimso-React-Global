// .eslintrc.js for shared/functions/ (Simplified for robustness)

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google"
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  ignorePatterns: [
    "node_modules/", // Crucially ignore node_modules
    "dist/",
    "lib/",
    "*.bak" // Ignore backup files
  ],
  rules: {
    "quotes": ["error", "single"],
    "indent": ["error", 2],
    "no-trailing-spaces": "error",
    "linebreak-style": ["error", "unix"],
    "object-curly-spacing": ["error", "always"],
    "no-debugger": "error",
    "prefer-const": "error",
    "max-len": ["warn", { "code": 100, "ignoreComments": true, "ignoreStrings": true, "ignoreTemplateLiterals": true, "ignoreRegExpLiterals": true }],
    "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    "camelcase": "off",
    "new-cap": "off",
    "require-jsdoc": "off",
    "valid-jsdoc": "off",
  },
  // IMPORTANT: Removed 'globals' section to avoid conflicts during ESLint's own loading process.
};