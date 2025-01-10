module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended', // Add this if using Prettier
  ],
  plugins: ['prettier', 'react'],
  rules: {
    'prettier/prettier': 'error', // Enable Prettier formatting
    'no-unused-vars': 'warn', // Example rule
    'react/react-in-jsx-scope': 'off', // Example rule for React
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    chrome: true,
  },
};
