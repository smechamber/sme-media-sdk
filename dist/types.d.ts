export interface MediaClientOptions {
    baseUrl: string;
    token: string;
}
export interface UploadResponse {
    success: boolean;
    id: string;
    resourceType: "image" | "video" | "document";
    filename: string;
    originalName: string;
    folder: string;
    mimeType: string;
    size: number;
    url: string;
    secureUrl: string;
}
export interface MultipleUploadResponse {
    success: boolean;
    count: number;
    files: UploadResponse[];
}
export interface DeleteResponse {
    success: boolean;
    message: string;
}
export interface DeleteMultipleResponse {
    success: boolean;
    deletedCount: number;
    failedCount: number;
    deleted: string[];
    failed: string[];
}
//# sourceMappingURL=types.d.ts.map