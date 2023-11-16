import { ExpoConfig } from '@expo/config-types';

const expoConfig: ExpoConfig = {
  name: 'casino',
  slug: 'casino',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  experiments: {
    tsconfigPaths: true,
  },
  plugins: [],
  splash: {
    backgroundColor: '#3563e9',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    config: {
      usesNonExemptEncryption: false,
    },
    bundleIdentifier: 'com.henol.casino',
  },
  android: {
    softwareKeyboardLayoutMode: 'pan',
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    package: 'com.henol.casino',
    versionCode: 1,
  },
  web: {
    favicon: './assets/favicon.png',
  },
};

export default expoConfig;
