module.exports = {
  env: {
    es2020: true,
  },
  extends: [
    '@react-native-community', 
    'airbnb-typescript', 
    'prettier', 
    'prettier/@typescript-eslint', 
    'prettier/react'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    project: "./tsconfig.json",
    ecmaFeatures: {
        "jsx": true
    },
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        "alwaysTryTypes": true
    }
    },
  },
  plugins: [
    '@typescript-eslint',
    "eslint-plugin-prettier"
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js', '.ts', '.tsx']
      }
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': 'off',
    'import/no-unresolved': 'off',
    '@typescript-eslint/camelcase': 'off',
    "suppressImplicitAnyIndexErrors": true
  },
};
