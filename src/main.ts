import { GameMode } from "./controllers";
const app = GameMode.getInstance();
app.init(() => {
  console.log("Successfully running an omp server powered by node.js");
});
