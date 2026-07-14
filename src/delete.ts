import {
  DeleteResponse,
  DeleteMultipleResponse,
} from "./types.js";
import { MediaClient } from "./client.js";
import { parseResponse } from "./utils.js";

export async function deleteFile(
  client: MediaClient,
  url: string
): Promise<DeleteResponse> {
  const response = await fetch(
    `${client.baseUrl}/api/v1/delete`,
    {
      method: "DELETE",
      headers: {
        ...client.headers(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    }
  );

  return parseResponse<DeleteResponse>(response);
}

export async function deleteMultiple(
  client: MediaClient,
  urls: string[]
): Promise<DeleteMultipleResponse> {
  const response = await fetch(
    `${client.baseUrl}/api/v1/delete/multiple`,
    {
      method: "DELETE",
      headers: {
        ...client.headers(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ urls }),
    }
  );

  return parseResponse<DeleteMultipleResponse>(response);
}