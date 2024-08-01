module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/order",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-console": "warn",
    "jsx-quotes": ["error", "prefer-double"],
    indent: ["warn", 2],
    "max-len": ["warn", { code: 120 }],
    "comma-dangle": ["warn", "always-multiline"],
    semi: ["warn", "always"],
  },
};