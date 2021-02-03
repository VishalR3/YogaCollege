import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  typography:{
    fontFamily:[
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h6:{
      fontWeight: 700,
      fontSize: "1.25rem",
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
      color:'#707070'
    },
    subtitle1:{
      fontSize:'0.75rem',
      color:'#707070',
    }
  }
})

export default theme;