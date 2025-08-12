import dotenv from 'dotenv';
dotenv.config();

export const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT || 4000),
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/campus_connect',
  jwtSecret: process.env.JWT_SECRET || 'dev_secret_change_me',
  corsOrigin: process.env.CORS_ORIGIN || '*',
};
