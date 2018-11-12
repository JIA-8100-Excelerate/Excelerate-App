import {SecureStore} from 'expo';

// Stores user's auth token globally
export const storeToken = async (token) => {
  await SecureStore.setItemAsync('auth_token', token);
}

// Retrieves user's auth token
export const retrieveToken = async () => { 
  const value = await SecureStore.getItemAsync('auth_token');
  return value;
}
