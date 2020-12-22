import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {//defino mis propios colores para primary
            light       : "#63a4fff",//cuando pase mouse sobre un boton
            main        : "#1976d2",
            dark        : "#004ba0",
            contrastText: "#ecfad8"
        }
    }
});