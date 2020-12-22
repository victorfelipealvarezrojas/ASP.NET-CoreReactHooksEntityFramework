import React from 'react';
import { Link } from 'react-router-dom'
import { Divider, List, ListItem, ListItemText } from '@material-ui/core';

export const MenuIzquierda = ({clases}) => {


    return (
        <div className = {clases.list}>
        <List>
           <ListItem>
               <ListItemText classes ={{primary : clases.listItemText}} primary = "Menu Principal" />
           </ListItem> 
        </List>
        <Divider />
        <List>
           <ListItem component={Link} button to="/auth/perfil">
               <i className="material-icons">account_box</i>
               <ListItemText classes ={{primary : clases.listItemText}} primary = "Perfil" />
           </ListItem> 
        </List>
        <Divider />
        <List>
           <ListItem component={Link} button to="/curso/nuevo">
               <i className="material-icons">add_box</i>
               <ListItemText classes ={{primary : clases.listItemText}} primary = "Nuevo Curso" />
           </ListItem> 
           <ListItem component={Link} button to="/curso/lista">
               <i className="material-icons">menu_book</i>
               <ListItemText classes ={{primary : clases.listItemText}} primary = "Lista Cursos" />
           </ListItem> 
        </List>
        <Divider />
        <List>
           <ListItem component={Link} button to="/instructor/nuevo">
               <i className="material-icons">person_add</i>
               <ListItemText classes ={{primary : clases.listItemText}} primary = "Muevo Instructor" />
           </ListItem> 
           <ListItem component={Link} button to="/instructor/lista">
               <i className="material-icons">people</i>
               <ListItemText classes ={{primary : clases.listItemText}} primary = "Lista Instructores" />
           </ListItem> 
        </List>
    </div>
    )
}