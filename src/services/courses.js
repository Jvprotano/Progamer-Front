import {http} from './config'
export default{
    infoCourse:() => {
        return http.get('course?id=1')
    },
    homeLoadData:() => {
        return http.get('api/home/load-data')
    },
    registerUser: (form) => {
        return http.post('/api/account/register-user', form)
    }
}