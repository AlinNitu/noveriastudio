export default function handler() {
  return new Response(
    JSON.stringify({
      ok: true,
      runtime: typeof process !== "undefined" ? "node" : "edge",
      nodeVersion: typeof process !== "undefined" ? process.version : null,
      at: new Date().toISOString(),
    }),
    { status: 200, headers: { "content-type": "application/json" } },
  );
}
