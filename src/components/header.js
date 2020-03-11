import React, { useState, useReducer, useContext } from "react"
import PropTypes from "prop-types"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Slide from "@material-ui/core/Slide"
import { makeStyles, Button, IconButton, TextField } from "@material-ui/core"
import { Link } from "gatsby"
import SearchIcon from "@material-ui/icons/Search"
import styled from "styled-components"
import reducer, { initialState } from "./reducer"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/GlobalContextProvider"

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
    color: theme.palette.text.primary,
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: "none",
  },
}))

export default function HideAppBar(props) {
  const [searchBarShowing, setSearchBarShowing] = useState(false)
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)
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
            {searchBarShowing ? (
              <TextField
                value={state.searchTerm}
                placeholder="search title or tag (i.e. react, redux)"
                onChange={e =>
                  dispatch({
                    type: "searchInputChanged",
                    payload: e.target.value,
                  })
                }
              />
            ) : null}
            <IconButton
              color="inherit"
              onClick={() => setSearchBarShowing(!searchBarShowing)}
            >
              <SearchIcon />
            </IconButton>
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
