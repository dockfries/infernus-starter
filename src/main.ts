import {
  OnGameModeInit,
  OnPlayerConnect,
  SendClientMessageToAll,
} from "samp-node-lib";

OnGameModeInit(() => {
  console.log("Successfully running an omp server powered by node.js");
});

OnPlayerConnect((player) => {
  // rgba
  SendClientMessageToAll(
    "(11,162,255,1)",
    `Welcome player ${player.GetPlayerName(24)} to connect to the server`
  );
  // hex
  player.SendClientMessage("#b6e3ff", `Your id is ${player.playerid}`);
});
