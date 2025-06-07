export default function getBaseUrl() {
    return process.env.STRAPI_URL || "http://localhost:1337";
}