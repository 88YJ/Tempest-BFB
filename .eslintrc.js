module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': ['warn', { endOfLine: 'auto' }],
    '@typescript-eslint/no-unused-vars': 'warn',
    'react-native/no-inline-styles': 0,
    semi: [1, 'never'],
  },
}
