module.exports = {
  extends: 'standard',
  plugins: [
    'mocha-no-only',
  ],
  env: {
    browser: true,
    node: true,
    mocha: true,
    jest: false,
  },
  globals: {
    artifacts: false,
    contract: false,
    assert: false,
    web3: false,
    expect: false,
  },
  rules: {
    'linebreak-style': 'off',
    semi: ['error', 'always'],
    'mocha-no-only/mocha-no-only': ['error'],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],
  },
};
