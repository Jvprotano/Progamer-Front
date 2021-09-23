import {http} from './config'
export default{
    infoCourse:() => {
        return http.get('home/load-data')
    }
}