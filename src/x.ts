import { getTimeoutMinutes } from "./timeout-minutes";

(async () => {
  const timeout = 60 * 1000 * await getTimeoutMinutes()

  setTimeout(() => {
    document.body.hidden = true
  }, timeout);
})()
