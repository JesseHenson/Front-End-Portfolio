import React, { useState, useReducer, useContext } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Helmet } from "react-helmet"
import Layout, { theme } from "../components/layout"
import { Grid, makeStyles, CssBaseline, Paper } from "@material-ui/core"
import MediaCard from "../components/card"
import { ThemeProvider } from "@material-ui/styles"
import reducer, { initialState } from "../components/reducer"
import { GlobalStateContext } from "../context/GlobalContextProvider"

const useStyles = makeStyles(theme => ({
  container: {
    marginBottom: theme.spacing(0),
    zIndex: 1,
    marginTop: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
}))

export const query = graphql`
  query {
    allCardInfoJson {
      edges {
        node {
          image
          title
          github
          example
          disabled
          desciption
          tags
        }
      }
    }
  }
`

export default ({ data }) => {
  const classes = useStyles()
  const state = useContext(GlobalStateContext)

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <CssBaseline>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Portfolio</title>
          </Helmet>
          <Grid
            className={classes.container}
            container
            justify="center"
            align="center"
            spacing={10}
          >
            {data.allCardInfoJson.edges
              .filter(
                project =>
                  project.node.title
                    .toLowerCase()
                    .includes(state.searchTerm.toLowerCase()) ||
                  project.node.tags.some(tag =>
                    tag.toLowerCase().includes(state.searchTerm.toLowerCase())
                  )
              )
              .map((project, index) => (
                <Grid
                  key={`${project.title}-${index}`}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                >
                  <MediaCard project={project.node} />
                </Grid>
              ))}
          </Grid>
        </CssBaseline>
      </Layout>
    </ThemeProvider>
  )
}
