import { adminProcedure, t } from ".";
import { z } from "zod";

const userProcedure = t.procedure.input(z.object({ id: z.number() }));

export const userRouter = t.router({
  get: userProcedure.query((req) => {
    // You can use the database to query, like better-sqlite3, this is just a simple case
    const id = req.input;
    return { id, name: "user01" };
  }),
  update: userProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .output(
      z.object({
        id: z.number(),
        name: z.string(),
      })
    )
    .mutation((req) => {
      console.log(req.ctx);
      return { id: req.input.id, name: req.input.name, age: 18 };
    }),
  del: adminProcedure.mutation(({ ctx }) => {
    console.log(ctx.user)
    return { code: 1, success: true }
  })
});
