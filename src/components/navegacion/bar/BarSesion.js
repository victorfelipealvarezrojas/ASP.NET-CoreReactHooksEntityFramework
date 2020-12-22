import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { IconButton, makeStyles, Toolbar, Typography, Button, Avatar, Drawer } from '@material-ui/core';
import FotoUsrTemp from '../../../../src/logo.svg';
import { useStateValue } from '../../../contexto/store';
import { MenuIzquierda } from './MenuIzquierda';
import { MenuDerecha } from './MenuDerecha';

const useStyle = makeStyles((theme) => ({
    seccionDesktop: {//oculta toido mhasta que reconozca que es pantalla md
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex"
        }
    },
    seccionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    },
    grow: {
        flexGrow: 1
    },
    avatarSize: {
        width: 40,
        height: 40
    },
    list: {
        width: 250
    },
    listItemText: {
        fontSize: "14px",
        fontWeight: 600,
        paddingLeft: "15px",
        color: "#212121"
    }
}));

const BarSesion = () => {
    const clases = useStyle();
    const [{ sesionUsuario }, dispatch] = useStateValue();//dispatch asociado a la variable de sesion que va a trabajar
    const [menuIzq, setMenuIzq] = useState(false);
    const [menuDer, setMenuDer] = useState(false);

    const cerrarMenuIzq = () => {
        setMenuIzq(false);
    }

    const abrirMenuIzqAction = () => {
        setMenuIzq(true);
    }

    const cerrarMenuDer = () => {
        setMenuDer(false);
    }

    const abrirMenuDerAction = () => {
        setMenuDer(true);
    }

    const salirSesionApp = () => {
        localStorage.removeItem('token_seguridad');
        this.props.history.push('/auth/login');
    }

    return (
        <Fragment>
            <Drawer
                open={ menuIzq }
                onClose = { cerrarMenuIzq }
                anchor = "left"
            >
                <div className = {clases.list} onKeyDown = {cerrarMenuIzq} onClick = {cerrarMenuIzq}>
                  <MenuIzquierda clases={clases} />
                </div>
            </Drawer>

            <Drawer
                open={ menuDer }
                onClose = { cerrarMenuDer }
                anchor = "right"
            >
                <div className = {clases.list} onKeyDown = {cerrarMenuDer} onClick = {cerrarMenuDer}>
                  <MenuDerecha clases={clases} 
                               salirSesion = {salirSesionApp}
                               usuario = {sesionUsuario? sesionUsuario.usuario : null}  
                  />
                </div>
            </Drawer>

            <Toolbar>

                <IconButton color="inherit" onClick = {abrirMenuIzqAction}>
                    <i className="material-icons">menu</i>
                </IconButton>

                <Typography variant="h6">Cursos Online</Typography>
                <div className={clases.grow}> </div>

                <div className={clases.seccionDesktop}>
                    <Button color="inherit">
                        Salir
                    </Button>
                    <Button color="inherit">
                        {sesionUsuario ? sesionUsuario.usuario.nombreCompleto : ''}
                    </Button>
                    <Avatar src={FotoUsrTemp}></Avatar>
                </div>

                <div className={clases.seccionMobile}>
                    <IconButton color="inherit" onClick = {abrirMenuDerAction}>
                        <i className="material-icons">more_vert</i>
                    </IconButton>
                </div>

            </Toolbar>
        </Fragment>

    )
}
//withRouter me eprmite usar el history
export default withRouter(BarSesion);