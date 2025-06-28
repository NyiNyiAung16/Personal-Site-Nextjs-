/**
 * Gets the base URL of the application.
 * @returns {string} The base URL, either for development or production.
 */
export default function getBaseUrl(): string {
    return process.env.MODE === 'development' ? 'http://localhost:1337' : (process.env.STRAPI_URL as string);
}
