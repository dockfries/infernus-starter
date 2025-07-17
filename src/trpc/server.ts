// Due to the compatibility of the embedded node.js environment
// any database operations, network requests, and built-in crypto
// strongly recommended through the separate trpc server.

// for complex projects, you can use implementations such as nest.js, 
// So you can delete the server-related rpc here,
// Implement it according to your own rpc library

// but here is just a basic reference for you.

import express from "express";
import cors from "cors";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { t } from "./routers";
import { userRouter } from "./routers/user";
import { createContext } from "./context";

if (global.samp) {
  throw new Error("pls only import type from trpc/server");
}

const appRouter = t.router({
  users: userRouter,
});

const app = express();

app.use(cors({}));
app.use("/trpc", createExpressMiddleware({ router: appRouter, createContext }));

app.listen(3000);

export type AppRouter = typeof appRouter;
