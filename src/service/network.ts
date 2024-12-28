import axios from 'axios';
import { getConfigValue } from '@brojs/cli';

const baseUrl = getConfigValue('kfu-24-teacher.api');

export const network = axios.create({ baseURL: baseUrl });

export const setToken = (token: string) => {
  network.defaults.headers.authorization = `Bearer ${token}`;
};