import { SampPlayer } from "samp-node-lib";

type EventName = string | string[];
type EventFunc = (this: SampPlayer, ...args: string[]) => any;

interface CmdImpl {
  name: EventName;
  fn: EventFunc;
}

// This is an event bus for distributing instructions entered by the user.
// You can bind a single instruction as a string, or you can bind multiple alias instructions as an array string
class CmdBus {
  private static eventList: Array<CmdImpl> = [];
  private constructor() {}

  static on(eventName: EventName, eventFunction: EventFunc) {
    const idx: number = CmdBus.findEventIdxByName(eventName);
    if (idx > -1)
      return console.log(
        "It is not supported to listen for the same event more than once"
      );
    CmdBus.eventList.push({ name: eventName, fn: eventFunction });
  }

  static off(eventName: EventName) {
    const idx: number = CmdBus.findEventIdxByName(eventName);
    if (idx === -1) return;
    CmdBus.eventList.splice(idx, 1);
  }

  static emit(
    player: SampPlayer,
    userEventName: EventName,
    userEventArgs: Array<string>
  ): boolean {
    const idx: number = CmdBus.findEventIdxByName(userEventName);
    if (idx > -1) {
      CmdBus.eventList[idx].fn.apply(player, userEventArgs);
      return true;
    }
    return false;
  }

  private static findEventIdxByName(eventName: EventName): number {
    return CmdBus.eventList.findIndex((v) => {
      if (typeof v.name === "string") {
        return v.name === eventName;
      }
      return v.name.some((e) => e === eventName);
    });
  }
}

export default CmdBus;
