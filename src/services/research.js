import {http} from './config'
export default{
    GetResearch:() => {
        return http.get('pesquisa?id=1')
    }
}