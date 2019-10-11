import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.SERVER_PORT,
  apiKey: process.env.APIKEY
};
