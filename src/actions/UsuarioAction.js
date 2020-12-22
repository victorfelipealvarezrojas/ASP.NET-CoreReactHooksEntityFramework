import HttpCliente from '../servicios/HttpCliente';

export const RegistrarUsuario = usuario => {
    console.log("error ingreso",usuario);
    return new Promise((resolve, eject) => {
        new HttpCliente.post('/Usuario/registrar', usuario).then(response => {
            console.log("error ingreso",response);

            resolve(response);
        });
    });
}

export const ObtenerUsuarioActual = (dispatch) => {
    return new Promise((resolve, eject) => {
        HttpCliente.get('Usuario').then(response => {
            dispatch({
                type : 'INICIAR_SESION',
                sesion: response.data,
                autenticado: true
            });
            resolve(response);
        });
    });
}

export const ActualizarUsuario = usuario => {
    return new Promise((resolve, eject) => {
        HttpCliente.put('Usuario', usuario).then(response => {
            resolve(response);
        }).catch(e => {
            resolve(e.response);
        });
    });
}

export const LoginUsuario = usuario => {
    return new Promise((resolve, eject) => {
        HttpCliente.post('Usuario/login', usuario).then(response => {
            resolve(response);
        });
    });
}
