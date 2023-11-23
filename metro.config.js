const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  let defaultConfig = await getDefaultConfig(__dirname);

  const { transformer, resolver } = defaultConfig;

  defaultConfig.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  };
  defaultConfig.resolver = {
    ...resolver,
    assetExts: [...resolver.assetExts.filter((ext) => ext !== 'svg'), 'lottie'],
    sourceExts: [...resolver.sourceExts, 'svg'],
  };

  return defaultConfig;
})();
