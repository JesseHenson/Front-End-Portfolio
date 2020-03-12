import React from "react"
import Header from "./header"
import "./layout.css"
import { CssBaseline, createMuiTheme, Box, makeStyles } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/styles"
import Footer from "./footer"

export const theme = createMuiTheme({
  palette: {
    primary: { main: "#343a40" },
    secondary: { main: "#8C7856" },
    text: { primary: "#F0FFF0" },
  },
})

const useStyles = makeStyles(theme => ({
  app: {
    minHeight: "100vh",
    overflowX: "hidden",
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Box className={classes.app}>
          <Header />
          {children}
          <Footer />
        </Box>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default Layout
