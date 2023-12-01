import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.simeon.testphaser',
  appName: 'Phaser Test App',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
