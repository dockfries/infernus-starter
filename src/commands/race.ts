import CmdBus from "@/utils/CmdBus";
import Color from "@/enums/color";

/* The tentative idea is to implement interception of commands through decorators, 
for example, to block access only after login or only for administrators. */
CmdBus.on(["r", "race"], function (...args) {
  // secondary instruction
  // means /r s or /race s
  if (args[0] === "s") {
    const next: string = args[1];
    this.SendClientMessage(
      Color.white,
      `and then the next parameter that you enter is ${next}.`
    );
  }
});
