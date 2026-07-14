import { upload, uploadMultiple } from "./upload.js";
import { deleteFile, deleteMultiple, } from "./delete.js";
export class MediaClient {
    baseUrl;
    token;
    constructor(options) {
        this.baseUrl = options.baseUrl.replace(/\/$/, "");
        this.token = options.token;
    }
    headers() {
        return {
            Authorization: `Bearer ${this.token}`,
        };
    }
    upload(file) {
        return upload(this, file);
    }
    uploadMultiple(files) {
        return uploadMultiple(this, files);
    }
    delete(url) {
        return deleteFile(this, url);
    }
    deleteMultiple(urls) {
        return deleteMultiple(this, urls);
    }
}
