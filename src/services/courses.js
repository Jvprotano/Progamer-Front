import {http} from './config'
export default{
    infoCourse:(id) => {
        return http.get('course?id=' + id );
    },
    homeLoadData:() => {
        return http.get('home/load-data');
    },
    registerUser: (form) => {
        return http.post('account/register-user', form);
}
}