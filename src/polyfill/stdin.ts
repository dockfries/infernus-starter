import process from "node:process";
import { GameMode } from "@infernus/core";

// When you use the node process module
// It's unclear why only the first input is valid under linux
// Subsequent console inputs do not trigger, so this disguised implementation is temporarily used
function stdinPolyfill() {
  if (process.platform !== "linux") return;
  let isInit = false;
  let stdinBound = false;

  const onStdinData = (data: Buffer) => {
    if (isInit) {
      GameMode.sendRconCommand(data.toString().trim(), "utf8");
    }
  };

  function bindStdin() {
    if (stdinBound) return;
    process.stdin.on("data", onStdinData);
    stdinBound = true;
  }

  function unbindStdin() {
    if (!stdinBound) return;
    process.stdin.off("data", onStdinData);
    process.stdin.pause();
    stdinBound = false;
  }

  GameMode.onInit(({ next }) => {
    isInit = true;
    bindStdin();
    return next();
  });

  GameMode.onExit(({ next }) => {
    unbindStdin();
    isInit = false;
    return next();
  });
}

stdinPolyfill();

export {};
