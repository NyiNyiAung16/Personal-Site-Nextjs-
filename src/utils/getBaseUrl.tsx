export default function getBaseUrl() {
    return process.env.MODE == 'development' ? 'http://localhost:1337' : process.env.STRAPI_URL;
}