import { MediaClient } from "./client.js";
import { parseResponse } from "./utils.js";

export interface HealthResponse {
  success: boolean;
  service: string;
  version: string;
  uptime: number;
  node: string;
  platform: string;
}

export async function health(
  client: MediaClient
): Promise<HealthResponse> {
  const response = await fetch(
    `${client.baseUrl}/api/v1/health`,
    {
      headers: client.headers(),
    }
  );

  return parseResponse<HealthResponse>(response);
}