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
  plugins: [
    '@react-native-firebase/app',
    '@react-native-firebase/auth',
    '@react-native-firebase/crashlytics',
  ],
  splash: {
    backgroundColor: '#3563e9',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    googleServicesFile: './GoogleService-Info.plist',
    config: {
      usesNonExemptEncryption: false,
    },
    bundleIdentifier: 'com.henol.casino',
    useFrameworks: 'static',
  },
  android: {
    googleServicesFile: './google-services.json',
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
  extra: {
    eas: {
      projectId: '6d791bf7-ef8e-435d-849b-90918446a513',
    },
  },
};

export default expoConfig;
