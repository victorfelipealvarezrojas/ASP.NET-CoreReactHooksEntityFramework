import React from 'react';
import { AppBar } from '@material-ui/core';
import  BarSesion  from './bar/BarSesion';


export const AppNavBar = () => {

    return(
        <AppBar position="static">
            <BarSesion />
        </AppBar>
    )
}