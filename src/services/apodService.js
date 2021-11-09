import { AppState } from "../AppState"
import { apod } from '../services/AxiosService'
import { logger } from "../utils/Logger"


let apiKey = 'api_key=ChCMQ7Gjmy6DHsZmjcKxCKJrapypdywhYXKlYneo'
class ApodService {
  async getPic(date) {
    const res = await apod.get(`https://api.nasa.gov/planetary/apod?date=2020-06-30&${apiKey}`)
    console.log(res.data)
    AppState.pic = res.data
  }
}
export const apodService = new ApodService()