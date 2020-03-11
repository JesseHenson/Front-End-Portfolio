import React from "react"
import {
  Toolbar,
  makeStyles,
  Typography,
  Grid,
  Divider,
  IconButton,
} from "@material-ui/core"
import TwitterIcon from "@material-ui/icons/Twitter"
import GitHubIcon from "@material-ui/icons/GitHub"
import CodeIcon from "@material-ui/icons/Code"

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.main,
    paddingTop: theme.spacing(2),
  },
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <Toolbar className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item alignContent="center">
          <Typography paragraph variant="body1" color="textPrimary">
            Phone: 720-234-5368
          </Typography>
          <Typography paragraph variant="body2" color="textPrimary">
            Email: henson.jhenson.jesse@gmail.com
          </Typography>
          <Typography paragraph variant="body2" color="textPrimary">
            Contact
          </Typography>
        </Grid>
        <Grid item>
          <IconButton href="https://codepen.io/JesseHenson">
            <CodeIcon />
          </IconButton>
          <IconButton href="https://twitter.com/henson_dev">
            <TwitterIcon />
          </IconButton>
          <IconButton href="https://github.com/JesseHenson">
            <GitHubIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Toolbar>
  )
}

export default Footer
