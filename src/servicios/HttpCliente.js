import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api/';

//inrterceptor que incluira em la cabecera de los request el token de acceso por cada request realizado
axios.interceptors.request.use((configuracion) => {
    const token = window.localStorage.getItem('token_seguridad');
    if (token) {
        configuracion.headers.Authorization = 'Bearer ' + token;
        return configuracion;
    }
}, error => {
    return Promise.reject(error);
});

const requestGenerico = {

    get  : (url) => axios.get(url), //en el get los parametros van dentro de la url
    post : (url, body) => axios.post(url, body), //en el post los parametros pueden ir dentro del cuerpo como json
    put  : (url, body) => axios.put(url, body), //en el put los parametros pueden ser la url y el body
    delete : (url) => axios.delete(url)
};

export default requestGenerico;

