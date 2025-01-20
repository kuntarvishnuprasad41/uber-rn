module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      { singleQuote: false, trailingComma: "all" },
    ],
    "object-curly-newline": ["error", { multiline: true }],
    quotes: ["error", "double", { avoidEscape: true }],
  },
};
