import dotenv from 'dotenv';
dotenv.config({ silent: true });


export const port = process.env.PORT || 4050;
export const jwtToken = process.env.JWT_SECRET;
export const MONGO_URL = process.env.MONGO_URL;
