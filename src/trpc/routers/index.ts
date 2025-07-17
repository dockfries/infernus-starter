import { initTRPC, TRPCError } from "@trpc/server";
import { createContext } from "../context";
import { ADMIN_TOKEN } from "../token";

export const t = initTRPC
  .context<Awaited<ReturnType<typeof createContext>>>()
  .create();

const isAdminMiddleWare = t.middleware(({ ctx, next }) => {
  if (ctx.req.headers.authorization !== ADMIN_TOKEN) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }
  return next({ ctx: { user: { id: 1, isAdmin: true } } })
})


export const adminProcedure = t.procedure.use(isAdminMiddleWare)