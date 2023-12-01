const key = 'timeout'
const defaultTimeout = 1

export const getTimeoutMinutes = async () => {
  const items = await chrome.storage.sync.get(key)
  const timeout = parseFloat(items[key])
  if (isNaN(timeout)) {
    return defaultTimeout
  }
  else {
    return timeout
  }
}

export const setTimeoutMinutes = async (timeout: number) => {
  await chrome.storage.sync.set({
    [key]: timeout
  })
}
