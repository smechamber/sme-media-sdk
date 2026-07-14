import { DeleteResponse, DeleteMultipleResponse } from "./types.js";
import { MediaClient } from "./client.js";
export declare function deleteFile(client: MediaClient, url: string): Promise<DeleteResponse>;
export declare function deleteMultiple(client: MediaClient, urls: string[]): Promise<DeleteMultipleResponse>;
//# sourceMappingURL=delete.d.ts.map