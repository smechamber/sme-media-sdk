import { UploadResponse, MultipleUploadResponse } from "./types.js";
import { MediaClient } from "./client.js";
export declare function upload(client: MediaClient, file: File): Promise<UploadResponse>;
export declare function uploadMultiple(client: MediaClient, files: File[]): Promise<MultipleUploadResponse>;
