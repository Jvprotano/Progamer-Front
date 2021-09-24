import {http} from './config'
export default{
    infoCourse:() => {
        return http.get('course?id=1')
    }
}