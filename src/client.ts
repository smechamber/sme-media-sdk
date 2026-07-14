import { MediaClientOptions } from "./types.js";
import { upload, uploadMultiple } from "./upload.js";
import { health } from "./health.js";
import {
  deleteFile,
  deleteMultiple,
} from "./delete.js";

export class MediaClient {
  readonly baseUrl: string;
  readonly token: string;

  health() {
  return health(this);
}

  constructor(options: MediaClientOptions) {
    this.baseUrl = options.baseUrl.replace(/\/$/, "");
    this.token = options.token;
  }

  headers() {
    return {
      Authorization: `Bearer ${this.token}`,
    };
  }

  upload(file: File) {
    return upload(this, file);
  }

  uploadMultiple(files: File[]) {
    return uploadMultiple(this, files);
  }

  delete(url: string) {
    return deleteFile(this, url);
  }

  deleteMultiple(urls: string[]) {
    return deleteMultiple(this, urls);
  }
}