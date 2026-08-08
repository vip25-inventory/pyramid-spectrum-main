const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  // Add webpack alias to help with the react-refresh import issue
  addWebpackAlias({
    'react-refresh/runtime': path.resolve(__dirname, 'node_modules/react-refresh/runtime.js'),
  })
); 