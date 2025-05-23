const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  // ignore CommonJS warnings
  singleSpaWebpackConfig.ignoreWarnings = [
    /Critical dependency/,
    /CommonJS or AMD dependencies/,
    /depends on.*CommonJS/,
    /style-loader/,
    /insertBySelector/
  ];

  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};
