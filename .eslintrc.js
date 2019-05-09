module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'react-native', 'jsx-a11y', 'import', 'prettier'],
  env: {
    browser: false,
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  rules: {
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prefer-stateless-function': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'class-methods-use-this': 'off',
    'react/sort-comp': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/no-unescaped-entities': 'off',
    'jsx-a11y/label-has-for': 'off',
    'import/no-named-as-default': 'off',
    'no-use-before-define': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
  },
};
