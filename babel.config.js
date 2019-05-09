module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@root': './',
          '@saga': './application/saga',
          '@actions': './application/actions',
          '@assets': './application/assets',
          '@components': './application/components',
          '@constants': './application/constants',
          '@navigators': './application/navigators',
          '@reducers': './application/reducers',
          '@screens': './application/screens',
          '@selectors': './application/selectors',
          '@utilities': './application/utilities',
          '@validators': './application/validators',
        },
      },
    ],
  ],
};
