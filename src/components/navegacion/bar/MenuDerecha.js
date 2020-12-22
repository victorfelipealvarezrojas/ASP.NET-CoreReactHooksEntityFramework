import { Avatar, List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

import FotoUsrTemp from '../../../../src/logo.svg';

export const MenuDerecha = ({clases, salirSesion, usuario }) => {


    return (
        <div className = {clases.list}>

        <List>
           <ListItem component={Link} button>
               <Avatar src={usuario.foto || FotoUsrTemp } />
               <ListItemText classes ={{primary : clases.listItemText}} primary={usuario? usuario.nombreCompleto:null} />
           </ListItem> 
        </List>
        <List>
           <ListItem  button onClick={salirSesion}>
               <ListItemText classes ={{primary : clases.listItemText}} primary="Salir" />
           </ListItem> 
        </List>

      </div>
    )
}