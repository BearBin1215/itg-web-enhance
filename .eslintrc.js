/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: false,
    es6: true,
    es2020: true,
    es2021: true,
    es2022: true,
  },
  plugins: [
    '@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  "extends": [
    "eslint:recommended",
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic',
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
  },
  rules: {
    "logical-assignment-operators": 2,
    "no-new-func": 2,
    "no-new-object": 2,
    "no-new-wrappers": 2,
    "no-var": 2,
    "prefer-const": 2,
    "no-misleading-character-class": 2,
    "no-template-curly-in-string": 2,
    "no-useless-return": 2,
    curly: 2,
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    "linebreak-style": [
      0,
      "unix",
    ],
    semi: [
      2,
      "always",
    ],
    "no-console": 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        varsIgnorePattern: '^_',
      },
    ],
    "no-redeclare": 1,
    "no-unreachable": 1,
    "no-inner-declarations": 0,
    "no-unneeded-ternary": 2,
    "comma-dangle": [
      1,
      "always-multiline",
    ],
    eqeqeq: 2,
    "dot-notation": 2,
    "no-else-return": 2,
    "no-extra-bind": 2,
    "no-labels": 2,
    "no-floating-decimal": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-magic-numbers": 0,
    "no-multi-spaces": 2,
    "no-param-reassign": 2,
    "no-trailing-spaces": 2,
    "spaced-comment": 2,
    "object-shorthand": 2,
    "quote-props": [
      1,
      "as-needed",
      {
        keywords: true,
        unnecessary: true,
        numbers: false,
      },
    ],
    "no-empty": [
      2,
      {
        allowEmptyCatch: true,
      },
    ],
    "arrow-spacing": [
      2,
      {
        before: true,
        after: true,
      },
    ],
    "prefer-arrow-callback": 2,
    "prefer-spread": 2,
    "prefer-template": 2,
    "prefer-rest-params": 2,
    "prefer-exponentiation-operator": 2,
    "require-await": 2,
    "arrow-parens": 2,
    "prefer-destructuring": 2,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/ban-ts-comment": 0,
  },
  overrides: [
    // 打包配置
    {
      files: [
        "build/**/*.js",
        "./*.*",
      ],
      env: {
        browser: false,
        node: true,
      },
      parserOptions: {
        ecmaVersion: "latest",
      },
      rules: {
        "@typescript-eslint/no-var-requires": 0,
      },
    },

    // CI脚本
    {
      files: ["scripts/**/*.js"],
      env: {
        browser: false,
        node: true,
      },
    },
  ],
};
