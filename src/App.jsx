import React from "react"
import Router from "./router/Router"
import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export default () => {

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <GlobalStyles
          styles={() => ({
            body: {
              boxsizing: 'border-box',
              margin: '0',
              padding: 0,
            }
          })}
        />
        <Router />
      </ThemeProvider>
    </>
  )
}
