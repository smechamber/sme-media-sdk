import { MediaSDKError } from "./errors.js";

export async function parseResponse<T>(response: Response): Promise<T> {
  const data = await response.json();

  if (!response.ok) {
    throw new MediaSDKError(
      data.message ?? "Request failed",
      response.status
    );
  }

  return data;
}