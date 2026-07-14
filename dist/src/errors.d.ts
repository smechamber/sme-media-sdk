export declare class MediaSDKError extends Error {
    status?: number | undefined;
    constructor(message: string, status?: number | undefined);
}
