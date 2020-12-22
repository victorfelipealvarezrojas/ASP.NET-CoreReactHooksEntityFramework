import React,{useContext, useReducer, createContext} from 'react';

export const StateContext = createContext();//creo mi contexto

//suscribo a mi contexto a todos los componentes(children) y es el que refencio dentro de app.js
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}  
    </StateContext.Provider>
)   
//es lo que impoereto en mis componnetes para tener acceso al valor de los stateInitial
export const useStateValue = () => useContext(StateContext);