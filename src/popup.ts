import { getTimeoutMinutes, setTimeoutMinutes } from "./timeout-minutes"

const timeoutInput = document.querySelector<HTMLInputElement>('#timeout-input')
if (timeoutInput === null) {
  throw Error('Null: timeout-input')
}

(async () => {
  timeoutInput.value = String(await getTimeoutMinutes())
  timeoutInput.addEventListener('blur', async () => {
    await setTimeoutMinutes(parseFloat(timeoutInput.value))
  })
})()
