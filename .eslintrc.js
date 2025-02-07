export const env = {
  node: true,
  commonjs: true,
  es6: true,
};
export const eslintExtends = ["eslint:recommended"];
export const parserOptions = {
  ecmaVersion: 2020,
  sourceType: "module",
};
export const rules = {
  "no-console": "off",
  indent: ["error", 2],
  quotes: ["error", "double"],
  semi: ["error", "always"],
  "no-undef": "off",
};
