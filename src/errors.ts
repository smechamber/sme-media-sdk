export class MediaSDKError extends Error {
  constructor(
    message: string,
    public status?: number
  ) {
    super(message);

    this.name = "MediaSDKError";
  }
}