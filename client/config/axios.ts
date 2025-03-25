import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

async function useAuthentication(config: InternalAxiosRequestConfig) {
  const userToken = await AsyncStorage.getItem("userSessionToken");
  const sellerToken = await AsyncStorage.getItem("sellerSessionToken");

  const token = sellerToken || userToken;

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
}

async function useRedirect(response: AxiosResponse) {
  if (
    response.status === 401 ||
    response.status === 403 ||
    Number(response.data.status) === 401 ||
    Number(response.data.status) === 403
  ) {
    await AsyncStorage.removeItem("userSessionToken");
    await AsyncStorage.removeItem("sellerSessionToken");

    const isSeller = await AsyncStorage.getItem("sellerSessionToken");

    router.replace(
      isSeller ? "/(routes)/user/register" : "/(routes)/user/login"
    );
  }

  return response;
}

const instance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_SERVER_URI,
  timeout: 30 * 1000,
});

instance.interceptors.request.use(useAuthentication);
instance.interceptors.response.use(useRedirect);

export default instance;
