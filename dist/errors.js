export class MediaSDKError extends Error {
    status;
    constructor(message, status) {
        super(message);
        this.status = status;
        this.name = "MediaSDKError";
    }
}
//# sourceMappingURL=errors.js.map