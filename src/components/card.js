import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { Link } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  card: {},
  media: {
    height: 140,
  },
  button: {
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  cardActionArea: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
  },
}))

export default function MediaCard({ project }) {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <a href={project.example} target="blank">
          <CardMedia
            className={classes.media}
            image={project.image}
            title="Contemplative Reptile"
          />
        </a>
        <CardContent>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h5"
            component="h2"
          >
            {project.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActionArea}>
        <a href={project.github} target="blank">
          <Button className={classes.button} size="small" color="primary">
            Github
          </Button>
        </a>
        <a href={project.example}>
          <Button
            className={classes.button}
            disabled={project.disabled}
            size="small"
            color="primary"
            variant="contained"
          >
            Example
          </Button>
        </a>
      </CardActions>
    </Card>
  )
}
