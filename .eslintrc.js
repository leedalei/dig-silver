module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", 'plugin:prettier/recommended'],
  parserOptions: {
    parser: "babel-eslint"
  },
  plugins: ["vue", "prettier"], 
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": [
      "error",
      {
        "semi": false,
        // "trailingComma": "none",
        "bracketSpacing": true,
        "jsxBracketSameLine": true,
        "tabWidth": 2
      }
    ]

  }
};
