import {http} from './config'
export default{
    salvar:(user) => {
        return http.post('account/create', user)
    }
}