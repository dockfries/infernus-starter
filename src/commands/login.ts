import CmdBus from "@/utils/CmdBus";
import Color from "@/enums/color";

CmdBus.on(["r", "reg", "register"], function (...args) {
  this.SendClientMessage(Color.white, `${this}, ${args}`);
});

CmdBus.on(["l", "login"], function (...args) {
  this.SendClientMessage(Color.white, `${this}, ${args}`);
});
