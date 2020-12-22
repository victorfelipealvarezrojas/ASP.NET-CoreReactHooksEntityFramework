import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography } from '@material-ui/core';

import { RegistrarUsuario } from '../../actions/UsuarioAction';

import style from './../Tools/Style';


export const RegistarUsuario = () => {
    const [usuario, setUsuario] = useState({
        NombreCompleto: '',
        Email: '',
        Password: '',
        ConfirPass: '',
        UserName: ''
    });
   
    const IngresarvaloresMemoria = e  => {
      const {name, value} = e.target;
      setUsuario(valoresMantener => ({
          ...valoresMantener,//mantengo datos anteriores para que no se pierda el estado
          [name]: value //eje.. [NombreCompleto]: 'pedro juan diego'
      }));
    }

    const submitRegistrarUsuario = e => {
        e.preventDefault();
        RegistrarUsuario(usuario).then(response => {
            console.log("vista",response);
            window.localStorage.setItem("token_seguridad", response.data.token);
        });
    }


    return (
        <Container component="main" maxWidth="md" justify="center" >
            <div style={style.paper}>
                <Typography component="h1" variant="h5">
                    Registro de usuario
                </Typography>
                <form style={style.forms}>
                    <Grid container spacing={2}>
                        {/*** Inicio Contenido formulario***/}
                        <Grid item xs={12} md={12}>
                            <TextField  name="NombreCompleto" 
                                        variant="outlined" 
                                        fullWidth 
                                        label="Ingrese nombre y apellido" 
                                        onChange = {IngresarvaloresMemoria}
                                        value = {usuario.NombreCompleto}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField  name="Email" 
                                        variant="outlined"
                                        fullWidth 
                                        label="Ingrese su Email"
                                        onChange = {IngresarvaloresMemoria}
                                        value = {usuario.Email}
                             />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField  name="UserName" 
                                        variant="outlined" 
                                        fullWidth 
                                        label="Ingrese nombre de usuario"
                                        onChange = {IngresarvaloresMemoria}
                                        value = {usuario.UserName}
                             />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField  name="Password"     
                                        type="password"
                                        variant="outlined" 
                                        fullWidth 
                                        label="Ingrese Contraseña"
                                        onChange = {IngresarvaloresMemoria}
                                        value = {usuario.Password}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField  name="ConfirPass"     
                                        type="password" 
                                        variant="outlined" 
                                        fullWidth 
                                        label="Confirme Contraseña"
                                        onChange = {IngresarvaloresMemoria}
                                        value = {usuario.ConfirPass}
                            />
                        </Grid>
                        {/*** Fin Contenido formulario***/}
                    </Grid>
                    <Grid container justify="center">
                        {/*** Inicio Operacioneso***/}
                        <Grid item xs={12} md={6}>
                            <Button type="submit" 
                                    fullWidth 
                                    variant="contained" 
                                    color="primary" 
                                    size="large" 
                                    style={style.submit}
                                    onClick = {submitRegistrarUsuario}
                            >
                                Registrar
                            </Button>
                        </Grid>
                        {/**Fin Operaciones***/}
                    </Grid>
                </form>
            </div>
        </Container>
    )
}