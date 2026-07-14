import { MediaClientOptions } from "./types.js";
export declare class MediaClient {
    readonly baseUrl: string;
    readonly token: string;
    health(): Promise<import("./health.js").HealthResponse>;
    constructor(options: MediaClientOptions);
    headers(): {
        Authorization: string;
    };
    upload(file: File): Promise<import("./types.js").UploadResponse>;
    uploadMultiple(files: File[]): Promise<import("./types.js").MultipleUploadResponse>;
    delete(url: string): Promise<import("./types.js").DeleteResponse>;
    deleteMultiple(urls: string[]): Promise<import("./types.js").DeleteMultipleResponse>;
}
//# sourceMappingURL=client.d.ts.map