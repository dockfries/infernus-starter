import "./trpc/client";
import "./commands";
import { GameMode } from "@infernus/core";
import { logger } from "./logger";
import { $t } from "./i18n";
import { cone } from "./controller/pickup";
import "./controller/player";
import { trpc } from "./trpc/client";

GameMode.onInit(async ({ next }) => {
  const req1 = await trpc.users.get.query({ id: 1 });
  console.log(req1.id);

  const req2 = await trpc.users.update.mutate({ id: 1, name: 'user02' });
  console.log(req2);

  const req3 = await trpc.users.del.mutate();
  console.log(req3);

  cone.create();
  logger.info($t("server.running"));
  return next();
});

GameMode.onExit(({ next }) => {
  logger.info($t("server.exit"));
  return next();
});

GameMode.onIncomingConnection(({ next, playerId, ipAddress, port }) => {
  logger.info($t("server.incoming", [playerId, ipAddress, port]));
  return next();
});

GameMode.onRconCommand(({ cmd, next }) => {
  logger.info($t("server.rcon.command", [cmd]));
  return next();
});

GameMode.onRconLoginAttempt(({ ip, password, success, next }) => {
  logger.info($t("server.rcon.attempt", [ip, password, success]));
  return next();
});
