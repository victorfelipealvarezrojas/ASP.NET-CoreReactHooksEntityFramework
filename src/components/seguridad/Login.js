import React, { useState } from 'react'
import { Button, Container, TextField, Avatar, Typography } from '@material-ui/core';

import LockIcon from '@material-ui/icons/Lock';

import { LoginUsuario } from '../../actions/UsuarioAction';

import style from './../Tools/Style';


export const Login = () => {
    const [usuario, setUsuario] = useState({
        Email: '',
        Password: ''
    });

    const onChageValue = e => {
        const {name, value} = e.target;
        setUsuario(valoresMantener => ({
            ...valoresMantener,//mantengo datos anteriores para que no se pierda el estado
            [name]: value //eje.. [NombreCompleto]: 'pedro juan diego'
        }));
    }

    const loginUsr = e => {
        e.preventDefault();
        LoginUsuario(usuario).then(resultado => {
            console.log(resultado);
            window.localStorage.setItem("token_seguridad", resultado.data.token);
        });
    }

    return (
        <Container maxWidth="xs" justify="center" >
            <div style={style.paper}>
                <Avatar style={style.avatar}>
                    <LockIcon style={style.icon} />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login de usuario
                </Typography>
                <form style={style.forms}>

                    <TextField name="Email"
                        variant="outlined"
                        fullWidth
                        label="Ingrese email de usuario"
                        margin="normal"
                        onChange={onChageValue}
                        value={usuario.Email}
                    />

                    <TextField name="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        label="Ingrese Contraseña"
                        margin="normal"
                        onChange={onChageValue}
                        value={usuario.Password}
                    />

                    <Button type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={style.submit}
                        onClick = {loginUsr}
                    >
                        Enviar
                    </Button>

                </form>
            </div>
        </Container>
    )
}