export default function useRequest() {
  const get = async (url) => {
    const { $httpClient } = useNuxtApp()
    return await $httpClient.get(url)
  }

  const post = async (url, body) => {
    const { $httpClient } = useNuxtApp()
    return await $httpClient.post(url, body)
  }

  return {
    get,
    post,
  }
}
