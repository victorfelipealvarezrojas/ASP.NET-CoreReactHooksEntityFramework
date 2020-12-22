import React, { useEffect, useState } from 'react';
import { Button, Container, Grid, TextField, Typography } from '@material-ui/core';

import { ActualizarUsuario, ObtenerUsuarioActual } from '../../actions/UsuarioAction';
import { useStateValue } from '../../contexto/store';//es el conetxto que contierne a todos los provider.

import style from './../Tools/Style';


export const PerfilUsuario = () => {
    const [{ sesionUsuario }, dispatch] = useStateValue();//dispatch asociado a la variable de sesion que va a trabajar
    const [usuario, setUsuario] = useState({
        nombreCompleto: '',
        email: '',
        password: '',
        confirPass: '',
        userName: ''
    });

    useEffect(() => {
        ObtenerUsuarioActual(dispatch).then(response => {
            console.log(response.data);
            setUsuario(response.data);
        })
    }, []);

    const IngresarvaloresMemoria = e => {
        const { name, value } = e.target;
        setUsuario(valoresMantener => ({
            ...valoresMantener,//mantengo datos anteriores para que no se pierda el estado
            [name]: value //eje.. [NombreCompleto]: 'pedro juan diego'
        }));
    }

    const submitRegistrarPerfil = e => {
        e.preventDefault();
        ActualizarUsuario(usuario).then(response => {
            if (response.status === 200) {
                dispatch({
                    type: 'OPEN_SNACKBAR',
                    openMensaje: {
                        open: true,
                        mensaje: 'Se guardaron correctamente los cambio en Perfil Usuario'
                    }
                });
                window.localStorage.setItem("token_seguridad", response.data.token);
            } else {
                dispatch({
                    type: 'OPEN_SNACKBAR',
                    openMensaje: {
                        open: true,
                        mensaje: 'Errores al intentar guardar los cambio en Perfil Usuario ' + Object.keys(response.data.errors)
                    }
                });
            }
        });
    }

    return (
        <Container component="main" maxWidth="md" justify="center" >
            <div style={style.paper}>
                <Typography component="h1" variant="h5">
                    Perfil de usuario
                </Typography>
                <form style={style.forms}>
                    <Grid container spacing={2}>
                        {/*** Inicio Contenido formul ario***/}
                        <Grid item xs={12} md={12}>
                            <TextField name="nombreCompleto"
                                variant="outlined"
                                fullWidth
                                label="Ingrese nombre y apellido"
                                onChange={IngresarvaloresMemoria}
                                value={usuario.nombreCompleto}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="userName"
                                variant="outlined"
                                fullWidth
                                label="Nombre de usuario"
                                onChange={IngresarvaloresMemoria}
                                value={usuario.userName}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="email"
                                variant="outlined"
                                fullWidth
                                label="Ingrese email"
                                onChange={IngresarvaloresMemoria}
                                value={usuario.email}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                label="Ingrese Contraseña"
                                onChange={IngresarvaloresMemoria}
                                value={usuario.password}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="confirPass"
                                type="password"
                                variant="outlined"
                                fullWidth
                                label="Confirme Contraseña"
                                onChange={IngresarvaloresMemoria}
                                value={usuario.confirPass}
                            />
                        </Grid>

                        {/*** Inicio Contenido formulario***/}
                    </Grid>
                    <Grid container justify="center">
                        {/*** Inicio Contenido Acciones***/}
                        <Grid item xs={12} md={6}>
                            <Button type="submit"
                                fullWidth variant="contained"
                                color="primary"
                                size="large"
                                style={style.submit}
                                onClick={submitRegistrarPerfil}
                            >
                                Guardar Datos
                            </Button>
                        </Grid>
                        {/*** Fin Contenido Acciones***/}
                    </Grid>
                </form>
            </div>
        </Container>
    );
};

