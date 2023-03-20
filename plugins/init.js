import axios from 'axios'

export default async ({ $config }, inject) => {
  const headers = {
    common: {
      'Content-Type': 'application/json',
    },
  }

  const token = useCookie('token')

  if (token.value) {
    headers.common['Authorization'] = token.value
  }

  const instance = axios.create({
    baseURL: $config.apiBaseUrl,
    headers,
  })

  instance.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      if (error.response.status === 401) {
        token.value = null
        return (window.location = '/auth/login')
      } else {
        return Promise.reject(error)
      }
    }
  )

  if (token.value) {
    await instance.get('/auth/user')
  }

  inject('axios', instance)
}
