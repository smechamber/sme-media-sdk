import { MediaSDKError } from "./errors.js";
export async function parseResponse(response) {
    const data = await response.json();
    if (!response.ok) {
        throw new MediaSDKError(data.message ?? "Request failed", response.status);
    }
    return data;
}
//# sourceMappingURL=utils.js.map