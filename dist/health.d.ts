import { MediaClient } from "./client.js";
export interface HealthResponse {
    success: boolean;
    service: string;
    version: string;
    uptime: number;
    node: string;
    platform: string;
}
export declare function health(client: MediaClient): Promise<HealthResponse>;
//# sourceMappingURL=health.d.ts.map