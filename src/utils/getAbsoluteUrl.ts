import getBaseUrl from "./getBaseUrl";

export default function getAbsoluteUrl(url: string): string {
    const baseUrl = getBaseUrl();
    return url.startsWith('http') ? url : baseUrl + url;
}
