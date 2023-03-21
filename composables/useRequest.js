export function useRequest() {
  const { $httpClient } = useNuxtApp()

  const get = async (url) => {
    return await $httpClient.get(url)
  }

  const post = async (url, body) => {
    return await $httpClient.post(url, body)
  }

  return {
    get,
    post,
  }
}
