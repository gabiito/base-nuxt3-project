import axios from 'axios'

import { useAuthStore } from '@/stores/auth'

export default async (context, inject) => {
  const { user, setUser } = useAuthStore()

  const headers = {
    common: {
      'Content-Type': 'application/json',
    },
  }

  const token = useCookie('token')

  console.log(token.value)

  if (token.value) {
    headers.common['Authorization'] = `Bearer ${token.value}`
  }

  const instance = axios.create({
    baseURL: context.$config.apiBaseUrl,
    headers,
  })

  instance.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      if (error.response.status === 401) {
        token.value = undefined
        // return (window.location = '/auth/login')
        return response
      } else {
        return Promise.reject(error)
      }
    }
  )

  if (token.value) {
    setUser({
      name: 'Juan',
      email: 'juan@buildonline.co',
    })

    await instance.get('/auth/user')
  }

  inject('httpClient', instance)
}
