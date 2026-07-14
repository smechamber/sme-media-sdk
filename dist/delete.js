import { parseResponse } from "./utils.js";
export async function deleteFile(client, url) {
    const response = await fetch(`${client.baseUrl}/api/v1/delete`, {
        method: "DELETE",
        headers: {
            ...client.headers(),
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
    });
    return parseResponse(response);
}
export async function deleteMultiple(client, urls) {
    const response = await fetch(`${client.baseUrl}/api/v1/delete/multiple`, {
        method: "DELETE",
        headers: {
            ...client.headers(),
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ urls }),
    });
    return parseResponse(response);
}
//# sourceMappingURL=delete.js.map