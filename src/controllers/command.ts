import CmdBus from "@/utils/CmdBus";
import ColorEnum from "@/enums/color";
import Player from "@/models/player";
import { OnPlayerCommandText, SendClientMessage } from "@/wrappers/helper";
import { $t } from "@/utils/i18n";

OnPlayerCommandText((p: Player, cmdtext: string) => {
  const regCmdtext = cmdtext.match(/[^/\s]+/gi);
  if (regCmdtext === null || regCmdtext.length === 0) {
    SendClientMessage(p, ColorEnum.yellow, $t("error.commandFormat"));
    return 1;
  }
  /* 
    Use eventBus to observe and subscribe to level 1 instructions, 
    support string and array pass, array used for alias.
  */
  const exist: boolean = CmdBus.emit(p, regCmdtext[0], regCmdtext.splice(1));
  const msg = $t("error.commandUndefined", [cmdtext]);
  if (!exist) SendClientMessage(p, ColorEnum.white, msg);
});
