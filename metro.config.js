const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  resolver: {
    extraNodeModules: {
      // Redirect lucide-react-native imports
      'lucide-react-native': require.resolve('lucide-react-native/dist/esm/icons')
    }
  }
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);