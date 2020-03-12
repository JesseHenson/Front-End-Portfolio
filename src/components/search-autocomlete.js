import React, { useState, useContext } from "react"
import {
  IconButton,
  TextField,
  ListItemText,
  List,
  ListItem,
  makeStyles,
} from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import styled from "styled-components"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/GlobalContextProvider"
import { useStaticQuery, graphql } from "gatsby"

const Root = styled.div`
  position: relative;
`

const useStyles = makeStyles(theme => ({
  autoCompleteList: {
    position: "absolute",
    top: 32,
    zIndex: 1,
    backgroundColor: theme.palette.primary.dark,
    width: "82%",
  },
  root: {
    position: "relative",
  },
}))

const SearchAutoComplete = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allCardInfoJson {
          edges {
            node {
              tags
            }
          }
        }
      }
    `
  )
  const classes = useStyles()
  const tagsList = []

  data.allCardInfoJson.edges.map(cards =>
    cards.node.tags.map(tag => tagsList.push(tag))
  )
  const tagsSet = new Set(tagsList)
  const [searchBarShowing, setSearchBarShowing] = useState(false)
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)
  return (
    <Root>
      {console.log(data)}
      {searchBarShowing ? (
        <TextField
          value={state.searchTerm}
          placeholder="search title and tags (i.e. React, Gatsby...)"
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
      {state.searchTerm ? (
        <List className={classes.autoCompleteList}>
          {[...tagsSet]
            .filter(tag => tag.includes(state.searchTerm))
            .map(tag => (
              <ListItem
                button
                onClick={e =>
                  dispatch({
                    type: "searchInputChanged",
                    payload: tag,
                  })
                }
              >
                <ListItemText>{tag}</ListItemText>
              </ListItem>
            ))}
        </List>
      ) : null}
    </Root>
  )
}

export default SearchAutoComplete
