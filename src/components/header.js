import React from "react"
import PropTypes from "prop-types"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Slide from "@material-ui/core/Slide"
import { makeStyles, Button } from "@material-ui/core"
import { Link } from "gatsby"

function HideOnScroll(props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

const useStyles = makeStyles(theme => ({
  toolbar: {
    backgroundColor: theme.palette.primary,
  },
  link: {
    color: theme.palette.common.white,
  },
}))

export default function HideAppBar(props) {
  const classes = useStyles()
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6">Jesse Henson</Typography>
            <div style={{ flex: 1 }} />
            <Button variant="outlined" color="secondary">
              <Link style={{ textDecoration: "none" }} to="/about">
                <Typography className={classes.link}>About</Typography>
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  )
}
