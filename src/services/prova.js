import {http} from './config'
export default{
    salvar:(cads) => {
        return http.post('prova/', cads)
    },
    listar:() => {
        return http.get('api/home/load-data')
    },

}