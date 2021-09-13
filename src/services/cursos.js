import config, { http } from './config'

export default {
    list:() =>{
        return http.post('courses')
    }
}