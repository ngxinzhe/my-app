import axios from 'axios'
import { TOKEN } from '@/store/utils/localStorageKey'

export const service = axios.create({
  headers: {
    Accept: 'Application/json',
  },
})

export function setApiDefaults() {
  // Fallback of setAuth set default token if user refresh the page
  service.defaults.headers.common['Authorization'] = `Bearer ${getAccessToken()}`
}

export function getAccessToken() {
  return localStorage.getItem(TOKEN)
}

// Set axios default when reload the page
setApiDefaults()

//axios get function
export function get(url, headers = {}, params = {}) {
  return service({
    method: 'GET',
    url: url,
    params: params,
    withCredentials: false,
    responseType: 'json',
    maxRedirects: 5,
    headers: headers,
  }).catch((error) => {
    console.warn(error)
  })
}

//axios post function
export function post(url, payload, headers = {}) {
  return service({
    method: 'POST',
    url: url,
    data: payload,
    responseType: 'json',
    maxRedirects: 5,
    withCredentials: false,
    headers: headers,
  }).catch((error) => {
    console.warn(error)
  })
}
