import server from "../dist/server/server.js";

export default async function handler(request) {
  // Vercel's Node runtime hands us a Request whose .url is just the pathname
  // ("/", "/foo"). TanStack Start → h3-v2 → srvx's FastURL chokes on that
  // (ERR_INVALID_URL when it tries `new URL("/")`). Rebuild as absolute.
  const host = request.headers.get("host") ?? "localhost";
  const proto = request.headers.get("x-forwarded-proto") ?? "https";
  const absoluteUrl = new URL(request.url, `${proto}://${host}`).toString();

  const init = { method: request.method, headers: request.headers };
  if (request.method !== "GET" && request.method !== "HEAD") {
    init.body = request.body;
    init.duplex = "half";
  }
  const fixed = new Request(absoluteUrl, init);

  return server.fetch(fixed, process.env, {});
}
