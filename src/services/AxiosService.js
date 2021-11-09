import Axios from 'axios'
import { baseURL, nasaUrl } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})
export const apod = Axios.create({
  nasaUrl,
  timeout: 8000
})