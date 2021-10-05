import {http} from './config'
export default{
    GetResearch:(id) => {
        return http.get('research?id=' + id)
    },

    ListResearches:() => {
        return http.get('research/list-researches')
    }
}