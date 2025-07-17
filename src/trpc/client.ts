import type { AppRouter } from "./server";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { ADMIN_TOKEN } from "./token";

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/trpc",
      headers: {
        Authorization: ADMIN_TOKEN,
      },
    }),
  ],
});
