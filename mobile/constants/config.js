const DEV_API_URL = Platform.select({
  ios: 'http://localhost:3000',  // For iOS simulator
  android: 'http://10.0.2.2:3000',  // For Android emulator
});

// Use this when you deploy your backend
const PROD_API_URL = 'YOUR_PRODUCTION_API_URL';

export const API_URL = __DEV__ ? DEV_API_URL : PROD_API_URL;
