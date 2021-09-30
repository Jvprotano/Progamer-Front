import {http} from './config'
export default{
    infoCourse:(id) => {
        return http.get('course?id=' + id )
    }
}