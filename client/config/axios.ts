import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
async function useAuthentication(config: InternalAxiosRequestConfig) {
  const token = await AsyncStorage.getItem("accessToken");

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
    await AsyncStorage.removeItem("accessToken");
    router.replace("/"); // redirect to home page
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
