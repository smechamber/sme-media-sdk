import { parseResponse } from "./utils.js";
export async function upload(client, file) {
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch(`${client.baseUrl}/api/v1/upload`, {
        method: "POST",
        headers: client.headers(),
        body: formData,
    });
    return parseResponse(response);
}
export async function uploadMultiple(client, files) {
    const formData = new FormData();
    files.forEach((file) => {
        formData.append("files", file);
    });
    const response = await fetch(`${client.baseUrl}/api/v1/upload/multiple`, {
        method: "POST",
        headers: client.headers(),
        body: formData,
    });
    return parseResponse(response);
}
//# sourceMappingURL=upload.js.map