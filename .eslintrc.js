module.exports = {
  root: true,
  extends: ["airbnb-base/legacy", "plugin:vue/recommended", "prettier", "plugin:gridsome/recommended"],
  plugins: ["gridsome", "prettier"],
  rules: {
    "gridsome/require-g-link-to": "error",
    "no-param-reassign": 0,
    "prettier/prettier": "error",
    // Web Componentsと差別化を図るため
    "vue/component-name-in-template-casing": "error",
    "vue/html-closing-bracket-newline": "error",
    "vue/html-closing-bracket-spacing": "error",
    "vue/html-indent": ["error", "tab"],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          normal: "never"
        }
      }
    ],
    "vue/no-multi-spaces": "error",
    "vue/no-confusing-v-for-v-if": "error",
    "vue/attributes-order": "error",
    "vue/order-in-components": "error",
    "vue/max-attributes-per-line": [
      2,
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ]
  },
};