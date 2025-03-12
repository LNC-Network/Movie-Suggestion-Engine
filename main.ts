import { route, type Route } from "@std/http/unstable-route";
import { complexCalculation } from "./complex_calculation.ts";

function extractNumbers(pathname: string): number[] | null {
  const match = pathname.match(/^\/add\/(\d+)\/(\d+)$/);
  if (match) {
    return [parseInt(match[1], 10), parseInt(match[2], 10)];
  }
  return null;
}

const routes: Route[] = [
  {
    method: ["GET", "HEAD"],
    pattern: new URLPattern({ pathname: "/" }),
    handler: (_req: Request) => new Response("Welcome to the Add API!"),
  },
  {
    method: ["GET", "HEAD"],
    pattern: new URLPattern({ pathname: "/add/*" }),
    handler: async (_req: Request) => {
      const { pathname } = new URL(_req.url);
      const numbers = extractNumbers(pathname);

      const result = await complexCalculation(numbers);
      return new Response(`Result: ${result}`);

    }
  },
];

function defaultHandler(_req: Request) {
  return new Response("Not found", { status: 404 });
}

Deno.serve(route(routes, defaultHandler));
