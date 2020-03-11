import React from "react"
import Layout from "../components/layout"
import {
  Typography,
  Paper,
  Container,
  makeStyles,
  Divider,
  Button,
} from "@material-ui/core"
import MaterialLink from "@material-ui/core/Link"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(7),
    padding: theme.spacing(7),
  },
  heading: {
    marginTop: theme.spacing(7),
  },
  subSection: {
    margin: theme.spacing(3),
  },
  link: {
    color: theme.palette.secondary.main,
  },
}))

const About = () => {
  const classes = useStyles()
  return (
    <Layout>
      <Paper className={classes.root}>
        <Typography color="textSecondary" variant="h2">
          Who I Am
        </Typography>
        <Typography
          color="textSecondary"
          paragraph
          className={classes.subSection}
        >
          I enjoy learning. Above all I enjoy learning, better myself furthering
          my relationships. I enjoy learning everything from health, technology,
          and science. I've spent my whole life having a passion for learning,
          and that's become focused on web development and systems. People are
          all contradictions. I love JAMStack. The process of making bigger more
          complex systems, easier, more efficient more manageable is fulfilling
          to me. I strive to be discipline and focused and improve my attention,
          will power and perseverance every day.
        </Typography>
        <Divider />
        <Typography
          color="textSecondary"
          className={classes.heading}
          variant="h2"
        >
          The Tech I Know and Love
        </Typography>
        <div className={classes.subSection}>
          <Typography color="textSecondary" variant="h3">
            React
          </Typography>
          <Typography color="textSecondary" paragraph>
            I have used react for all of my projects, in some form, whether it's
            vanilla react or Gatsby. I like the flexibility and structure it
            brings to my projects. I love the flow and the technology of it all.
            The rerendering cycle seems so intuitive.
          </Typography>
          <Button variant="contained" color="secondary">
            <Link style={{ color: "black" }} to="/">
              home
            </Link>
          </Button>
        </div>
        <div className={classes.subSection}>
          <Typography
            color="textSecondary"
            className={classes.subheading}
            variant="h3"
          >
            Gatsby
          </Typography>
        </div>
        <div className={classes.subSection}>
          <Typography color="textSecondary" paragraph>
            Using react in a static site generator, makes for great
            functionality with great speed. You can see examples in the
            todoList, Tech Blog
          </Typography>
        </div>
        <div className={classes.subSection}>
          <Typography
            color="textSecondary"
            className={classes.subheading}
            variant="h3"
          >
            Serverless
          </Typography>
        </div>
        <div className={classes.subSection}>
          <Typography
            color="textSecondary"
            className={classes.subheading}
            variant="h3"
          >
            Material-UI
          </Typography>
        </div>
        <div className={classes.subSection}>
          <Typography
            color="textSecondary"
            className={classes.subheading}
            variant="h3"
          >
            Firebase
          </Typography>
        </div>
        <Typography color="textSecondary" variant="h2" color="secondary">
          So... Why Hire Me
        </Typography>
        <Typography
          color="textSecondary"
          paragraph
          className={classes.subSection}
        >
          I'm a problem solver! Beyond everything else I'm a problem solver I've
          spent 5 years of my life solving problems professionally. As a manager
          I solved conflicts, improved time management, systematically improved
          the department overall As an accountant and IT professional, I solved
          many time sucking problems. I provided faster better answers to
          business problems on a daily saving the company hours a week in labor
          As an integration specialist, I save even more time for my company. I
          pull information from many sources making everything come together, go
          to the right people and help the company shave hours per employee off
          their labor costs.
        </Typography>

        {/* why would you hire me: 
        
        !!! this needs to read more from their perspective... what they are looking for, what I've done for those companies with accomplishments\
        
        I'm into discipline/selfcontrol/self awareness, perserverance, and will power focus and attention 
        
      */}
      </Paper>
    </Layout>
  )
}

export default About
