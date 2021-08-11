interface ProgressResponse {
    ok: boolean;
    status: number;
    event: XMLHttpRequest;
}
/**
 * Fetch with porgress callback
 * @param url
 * @param opts
 * @param onProgress
 * @returns {Promise}
 */
export declare function fetchWithProgress(url: string, opts: RequestInit, onProgress?: ((this: XMLHttpRequest, ev: ProgressEvent) => any)): Promise<Response | ProgressResponse>;
export {};
