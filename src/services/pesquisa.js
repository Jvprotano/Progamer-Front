import {http} from './config'
export default{
    pesquisaList:() => {
        return http.get('pesquisa')
    },
    pesquisaDelete:(pesquisa) => {
        return http.delete('pesquisa', {name : pesquisa})
    },
    salvar:(pesquisa) => {
        return http.post('pesquisa', pesquisa)
    },
    edit:(pesquisa) => {
        return http.put('pesquisa', pesquisa)
    }
}