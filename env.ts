/**
 * Used to detect the environment of the application
 *
 * - `true` if the application is in production mode.
 */
// export const isProduction = process.env.NEXT_PUBLIC_APP_MODE === 'production';
export const isProduction = process.env.NODE_ENV !== 'development';
