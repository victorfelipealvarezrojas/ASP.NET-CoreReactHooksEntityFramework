import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';//entrega todas las libreria del material desing(botones,tabnlas,etc)
import { ThemeProvider } from '@material-ui/styles';//MuiThemeProvider me da error
import { Grid, Snackbar } from '@material-ui/core';
import { theme } from './theme/theme';
import { RegistarUsuario } from './components/seguridad/Registrar';
import { Login } from './components/seguridad/Login';
import { PerfilUsuario } from './components/seguridad/PerfilUsuario';
import { AppNavBar } from './components/navegacion/AppNavBar';
import { useStateValue } from './contexto/store';//es el conetxto que contierne a todos los provider.
import { ObtenerUsuarioActual } from './actions/UsuarioAction';

function App() {

  const [{ sesionUsuario, openSnackbar }, dispatch] = useStateValue();//dispatch asociado a la variable de sesion que va a trabajar

  const [inicial, setInicial] = useState(false);
  console.log("paso")
  useEffect(() => {
    if(!inicial){

      //ObtenerUsuarioActual almacenara el usuario actual en las variables de sesion del reducer para poder usarlas en el resto de componentes hijos
      ObtenerUsuarioActual(dispatch).then(r => {
        setInicial(true);
      }).catch(err =>{
        setInicial(true);
      });

    }
  }, [inicial]);

  return (

    <Fragment>

      <Snackbar
        anchorOrigin={{vertical:"bottom",horizontal:"center"}}
        open={openSnackbar ? openSnackbar.open : false}
        autoHideDuration = {5000}
        ContentProps = {{"aria-describedby": "message-id"}}
        message = {
          <span  id = "message-id">{openSnackbar ? openSnackbar.mensaje : ''}</span>
        }
        onClose={() =>
          dispatch({
            type: 'OPEN_SNACKBAR',
            openMensaje: {
              open: false,
              mensaje: ''
            }
          })
        }
      >
      </Snackbar>

    <Router>
      <ThemeProvider theme={theme} >
        <AppNavBar />
        <Grid container>
          <Switch>
            <Route exact path="/auth/login" component={Login} />
            <Route exact path="/auth/registrar" component={RegistarUsuario} />
            <Route exact path="/auth/perfil" component={PerfilUsuario} />
            <Route exact path="/" component={PerfilUsuario} />
          </Switch>
        </Grid>
      </ThemeProvider>
    </Router>
    </Fragment>

  );
}

export default App;
