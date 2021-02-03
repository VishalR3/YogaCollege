import { CssBaseline, ThemeProvider } from '@material-ui/core'
import theme from '../components/common/light'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvider theme = {theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  ) 
}

export default MyApp
