import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'br.bsb.carlos',
  appName: 'ionic-capacitor-plugin-tests',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    PushNotifications: {
      // eslint-disable-next-line @typescript-eslint/quotes
      presentationOptions: ["badge", "sound", "alert"],
    },
  },
};

export default config;
