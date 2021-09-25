import { Application, helpers, Router } from "./deps.ts";

export function createApp(): Application {
  const app = new Application();
  const router = new Router();

  router.get("/greet", (ctx) => {
    const { name = "anonymus" } = helpers.getQuery(ctx);
    ctx.response.body = `Hello ${name}!`;
  });

  app.use(router.routes());
  return app;
}
