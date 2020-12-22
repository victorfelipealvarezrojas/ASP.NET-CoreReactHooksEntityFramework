export const initialState = {
    usuario: {
        nombreCompleto: '',
        email: '',
        userName: '',
        foto: ''
    },
    autenticado: false
}

const sesionUsuarioReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INICIAR_SESION':
            return {
                ...state,
                usuario: action.sesion,
                autenticado: action.autentocado
            };
        case 'SALIR_SESION':
            return {
                ...state,
                usuario: action.nuevoUsuario,
                autenticado: action.autentocado
            };
        case 'ACTUALIZAR_USUARIO':
            return {
                ...state,
                usuario: action.nuevoUsuario,
                autenticado: action.autentocado
            };
        default : return state;
    }
};

export default sesionUsuarioReducer;