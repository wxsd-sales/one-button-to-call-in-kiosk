import axios from 'axios';
import { BOT_TOKEN } from '../constants';

export default axios.create({
  baseURL: 'https://webexapis.com/v1',
  timeout: 10000,
  headers: { 'Authorization': `Bearer ${BOT_TOKEN}` }
});