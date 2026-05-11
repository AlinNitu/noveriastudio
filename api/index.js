import { Readable } from "node:stream";
import server from "../dist/server/server.js";

export default async function handler(req, res) {
  // Vercel's Node runtime hands us IncomingMessage/ServerResponse, not the
  // Web Request/Response that TanStack Start (and Cloudflare Workers) expect.
  // Bridge the two: build a Web Request, run SSR, pipe the Response back.
  const host = req.headers.host ?? "localhost";
  const proto = req.headers["x-forwarded-proto"] ?? "https";
  const url = `${proto}://${host}${req.url ?? "/"}`;

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (Array.isArray(value)) {
      for (const v of value) headers.append(key, v);
    } else if (value !== undefined) {
      headers.set(key, value);
    }
  }

  const init = { method: req.method, headers };
  if (req.method !== "GET" && req.method !== "HEAD") {
    init.body = Readable.toWeb(req);
    init.duplex = "half";
  }
  const request = new Request(url, init);

  const response = await server.fetch(request, process.env, {});

  res.statusCode = response.status;
  for (const [key, value] of response.headers) {
    res.setHeader(key, value);
  }

  if (response.body) {
    Readable.fromWeb(response.body).pipe(res);
  } else {
    res.end();
  }
}
