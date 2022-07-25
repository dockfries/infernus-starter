import { delDialogRecord, waitingDialogs } from "@/controllers/dialog";
import Player from "@/models/player";
import { ShowPlayerDialog } from "@/wrappers/i18n";
import { DIALOG_STYLE } from "samp-node-lib";
import { $t } from "./i18n";

interface DialogImpl {
  style: DIALOG_STYLE;
  caption: string;
  info: string;
  button1: string;
  button2: string;
}

type DialogResponse = Promise<{
  response: number;
  listitem: number;
  inputtext: string;
}>;

/* You don't need to define the dialog id, 
  but you need to pay attention to the fact that you shouldn't repeatedly new the dialog in the function, 
  instead you should call the open method.
  
  If you need to change the value dynamically, you should do it by setter method
*/

class Dialog {
  private id: number;
  private static CREATED_ID: number = -1;
  private static MAX_DIALOGID: number = 32767;
  private dialog: DialogImpl;

  constructor(
    dialog: DialogImpl = {
      style: DIALOG_STYLE.MSGBOX,
      caption: "",
      info: "",
      button1: "",
      button2: "",
    }
  ) {
    if (Dialog.CREATED_ID < Dialog.MAX_DIALOGID) {
      Dialog.CREATED_ID++;
    } else {
      console.log($t("error.dialogLimited"));
    }
    this.dialog = dialog;
    this.id = Dialog.CREATED_ID;
  }

  // #region
  public get style(): DIALOG_STYLE {
    return this.dialog.style;
  }
  public set style(v: DIALOG_STYLE) {
    this.dialog.style = v;
  }

  public get caption(): string {
    return this.dialog.caption;
  }
  public set caption(v: string) {
    this.dialog.caption = v;
  }

  public get info(): string {
    return this.dialog.info;
  }
  public set info(v: string) {
    this.dialog.info = v;
  }

  public get button1(): string {
    return this.dialog.button1;
  }
  public set button1(v: string) {
    this.dialog.button1 = v;
  }

  public get button2(): string {
    return this.dialog.button2;
  }
  public set button2(v: string) {
    this.dialog.button2 = v;
  }
  //#endregion

  public open(player: Player): Promise<DialogResponse> {
    const p = new Promise<DialogResponse>((resolve) => {
      waitingDialogs.set(player.id, resolve);
      ShowPlayerDialog(player, this.id, this.dialog);
    });
    p.then(() => delDialogRecord(player));
    return p;
  }

  public static close(player: Player) {
    delDialogRecord(player);
    ShowPlayerDialog(player, -1, {
      style: DIALOG_STYLE.MSGBOX,
      caption: " ",
      info: " ",
      button1: " ",
      button2: "",
    });
  }
}

export default Dialog;
export type { DialogImpl };
