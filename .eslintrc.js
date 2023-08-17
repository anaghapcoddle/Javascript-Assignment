module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: ["airbnb", "plugin:node/recommended"],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    "spaced-comment": "off",

    "no-console": "warn",

    "consistent-return": "off",

    "dot-notation": "off",

    "no-else-return": "off",

    "func-names": "off",

    "object-shorthand": "off",

    "no-process-exit": "off",

    "no-param-reassign": "off",

    "no-return-await": "off",

    "no-underscore-dangle": "off",

    "class-methods-use-this": "off",

    "prefer-destructuring": ["error", { "object": true, "array": false }],

    "no-unused-vars": ["error", { "argsIgnorePattern": "req|res|next|val" }],

    "no-use-before-define": ["error", { "functions": false }],
    
  }
}
