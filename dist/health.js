import { parseResponse } from "./utils.js";
export async function health(client) {
    const response = await fetch(`${client.baseUrl}/api/v1/health`, {
        headers: client.headers(),
    });
    return parseResponse(response);
}
//# sourceMappingURL=health.js.map