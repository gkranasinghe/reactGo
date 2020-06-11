import { DB_TYPES } from './dbTypes';

export const ENV = process.env.NODE_ENV || 'development';
export const DB_TYPE = process.env.DB_TYPE || DB_TYPES.MONGO;
export const REDUX_ASYNC_MIDDLEWARE = process.env.REDUX_ASYNC_MIDDLEWARE || 'thunk';

export const GOOGLE_ANALYTICS_ID = process.env.GOOGLE_ANALYTICS_ID || null;
