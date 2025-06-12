import getBaseUrl from "./getBaseUrl";

/**
 * @param {string} url - The relative or absolute URL to be converted to an absolute URL.
 * @returns {string} The absolute URL.
 */
export default function getAbsoluteUrl(url: string): string {
    const baseUrl = getBaseUrl();
    return url?.startsWith('http') ? url : baseUrl + url;
}
