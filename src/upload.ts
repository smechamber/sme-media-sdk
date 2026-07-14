import {
  UploadResponse,
  MultipleUploadResponse,
} from "./types.js";
import { parseResponse } from "./utils.js";
import { MediaClient } from "./client.js";

export async function upload(
  client: MediaClient,
  file: File
): Promise<UploadResponse> {
  const formData = new FormData();

  formData.append("file", file);

  const response = await fetch(
    `${client.baseUrl}/api/v1/upload`,
    {
      method: "POST",
      headers: client.headers(),
      body: formData,
    }
  );

  return parseResponse<UploadResponse>(response);
}

export async function uploadMultiple(
  client: MediaClient,
  files: File[]
): Promise<MultipleUploadResponse> {
  const formData = new FormData();

  files.forEach((file) => {
    formData.append("files", file);
  });

  const response = await fetch(
    `${client.baseUrl}/api/v1/upload/multiple`,
    {
      method: "POST",
      headers: client.headers(),
      body: formData,
    }
  );

  return parseResponse<MultipleUploadResponse>(response);
}