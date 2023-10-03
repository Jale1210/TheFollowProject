import axios from 'axios';
import store from '@/store/index'
// import store from '@/store/index'


import {SocialPanel} from './SocialPanel.js'


export default {
    ...SocialPanel
}
axios.interceptors.request.use(
    config => {
        const language = localStorage.getItem('language');
        config.headers = Object.assign({
            'Accept-Language': language,
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': 'PUT, GET, HEAD, POST, DELETE, OPTIONS'
        }, config.headers);
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use((response) => response, (error) => {
    // console.log(error.response.data)
    // if (error.response.status == 401) {
    //     // router.push("/service");
    // }

    // localStorage.setItem('authed', true)
    // store.dispatch('updateAuthed', true)


    return Promise.reject(error);
});
