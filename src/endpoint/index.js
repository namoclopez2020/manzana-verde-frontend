import axios from 'axios'

const baseURL = 'https://josenamoc-manzana-verde-api.herokuapp.com/api/'

let headers = {
    'Content-Type' : 'application/json',
    'Accept' : 'application/json',
    device: `SO: ${navigator.platform} || Navegador: ${navigator.userAgent}`,
};

export default {
    
    get({url,params}){
        const user = localStorage.getItem('user')
        if(user){
            const userData = JSON.parse(user)
            headers['Authorization'] = `Bearer ${userData.token}`
        }
        const instance = axios.create({
            method: 'GET', 
            mode: 'cors',
            cache: 'no-cache', 
            baseURL,
            headers,
            redirect: 'follow', 
            referrerPolicy: 'no-referrer', 
        });

        return instance.get(url,params)
            .then( res => res.data )
    },
    post({url,params}){
        const user = localStorage.getItem('user')
        if(user){
            const userData = JSON.parse(user)
            headers['Authorization'] = `Bearer ${userData.token}`
        }
        const instance = axios.create({
            method: 'GET', 
            mode: 'cors',
            cache: 'no-cache', 
            baseURL,
            headers,
            redirect: 'follow', 
            referrerPolicy: 'no-referrer', 
        });
        return instance.post(url,params)
            .then( res => res.data )
    },
}