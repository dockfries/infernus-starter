import CmdBus from "../utils/CmdBus";
import Dialog from "../utils/Dialog";
import { DIALOG_STYLE } from "samp-node-lib";

const helpDialog = new Dialog({
  style: DIALOG_STYLE.MSGBOX,
  caption: "Help",
  info: "You can use the following commands: foo",
  button1: "Close",
  button2: "",
});

CmdBus.on("help", function () {
  // show help dialog
  helpDialog.open(this);
});
