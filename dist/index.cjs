"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  MediaClient: () => MediaClient,
  MediaSDKError: () => MediaSDKError
});
module.exports = __toCommonJS(index_exports);

// src/errors.ts
var MediaSDKError = class extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
    this.name = "MediaSDKError";
  }
  status;
};

// src/utils.ts
async function parseResponse(response) {
  const data = await response.json();
  if (!response.ok) {
    throw new MediaSDKError(
      data.message ?? "Request failed",
      response.status
    );
  }
  return data;
}

// src/upload.ts
async function upload(client, file) {
  const formData = new FormData();
  formData.append("file", file);
  const response = await fetch(
    `${client.baseUrl}/api/v1/upload`,
    {
      method: "POST",
      headers: client.headers(),
      body: formData
    }
  );
  return parseResponse(response);
}
async function uploadMultiple(client, files) {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append("files", file);
  });
  const response = await fetch(
    `${client.baseUrl}/api/v1/upload/multiple`,
    {
      method: "POST",
      headers: client.headers(),
      body: formData
    }
  );
  return parseResponse(response);
}

// src/delete.ts
async function deleteFile(client, url) {
  const response = await fetch(
    `${client.baseUrl}/api/v1/delete`,
    {
      method: "DELETE",
      headers: {
        ...client.headers(),
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url })
    }
  );
  return parseResponse(response);
}
async function deleteMultiple(client, urls) {
  const response = await fetch(
    `${client.baseUrl}/api/v1/delete/multiple`,
    {
      method: "DELETE",
      headers: {
        ...client.headers(),
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ urls })
    }
  );
  return parseResponse(response);
}

// src/client.ts
var MediaClient = class {
  baseUrl;
  token;
  constructor(options) {
    this.baseUrl = options.baseUrl.replace(/\/$/, "");
    this.token = options.token;
  }
  headers() {
    return {
      Authorization: `Bearer ${this.token}`
    };
  }
  upload(file) {
    return upload(this, file);
  }
  uploadMultiple(files) {
    return uploadMultiple(this, files);
  }
  delete(url) {
    return deleteFile(this, url);
  }
  deleteMultiple(urls) {
    return deleteMultiple(this, urls);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MediaClient,
  MediaSDKError
});
