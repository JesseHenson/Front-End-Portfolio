import React from "react"
import PropTypes from "prop-types"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Slide from "@material-ui/core/Slide"
import { makeStyles, Button } from "@material-ui/core"
import { Link } from "gatsby"

import SearchAutoComplete from "./search-autocomlete"

function HideOnScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
}

const useStyles = makeStyles(theme => ({
  toolbar: {
    backgroundColor: theme.palette.primary,
    color: theme.palette.text.primary,
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: "none",
  },
}))

export default function HideAppBar(props) {
  const classes = useStyles()
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar className={classes.toolbar}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography variant="h6" className={classes.link}>
                Jesse Henson
              </Typography>
            </Link>
            <div style={{ flex: 1 }} />
            <SearchAutoComplete></SearchAutoComplete>
            <Link
              to="/about"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Button variant="outlined" color="secondary">
                <Typography className={classes.link}>About</Typography>
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  )
}
