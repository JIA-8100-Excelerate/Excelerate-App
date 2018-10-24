import {SecureStore} from 'expo';

export const storeToken = async (token) => {
  await SecureStore.setItemAsync('auth_token', token);
}

export const retrieveToken = async () => { 
  const value = await SecureStore.getItemAsync('auth_token');
  return value;
}
