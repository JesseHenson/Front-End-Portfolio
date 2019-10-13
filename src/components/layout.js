/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { CssBaseline, createMuiTheme, Box, makeStyles } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/styles"
import BottomAppBar from "./bottomNav"

export const theme = createMuiTheme({
  palette: {
    primary: { main: "#343a40" },
    secondary: { main: "#8C7856" },
  },
})

const useStyles = makeStyles(theme => ({
  app: {
    minHeight: "100vh",
    overflowX: "hidden",
  },
}))

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Box className={classes.app}>
          <Header siteTitle={data.site.siteMetadata.title} />
          {children}
          <BottomAppBar />
        </Box>
      </CssBaseline>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
