
export type PropsMenuItem = {
    pathname: string,
    onClick: Function,
    auth: UserAuthInfo,
};

export type UserAuthInfo = {
    accessToken?: string | null | undefined,
    roles?: { [key: string]: any },
    permissions?: { [key: string]: any },
};
