const isActiveLink = (path: string, pathname: string) => {
    return pathname === path ? "activeLink" : "";
}

export { isActiveLink };