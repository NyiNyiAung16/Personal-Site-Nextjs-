import getBaseUrl from "./getBaseUrl";

export default function getAbsoluteUrl(url: string): string {
    // return url.startsWith('http') ? url : `${getBaseUrl()}${url}`;
    return `${getBaseUrl()}${url}`;
};