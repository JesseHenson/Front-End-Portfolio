import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Helmet } from "react-helmet"
import Layout, { theme } from "../components/layout"
import { Grid, makeStyles, CssBaseline } from "@material-ui/core"
import MediaCard from "../components/card"
import { ThemeProvider } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  container: {
    marginBottom: theme.spacing(10),
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
        }
      }
    }
  }
`

export default ({ data }) => {
  const classes = useStyles()

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
            {data.allCardInfoJson.edges.map(project => (
              <Grid item xs={12} sm={6} md={4}>
                <MediaCard project={project.node} />
              </Grid>
            ))}
          </Grid>
        </CssBaseline>
      </Layout>
    </ThemeProvider>
  )
}
