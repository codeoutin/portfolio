import { Box, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Buttons from "./Buttons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      flexDirection: "column",
      [theme.breakpoints.down("md")]: {
        marginTop: theme.spacing(6),
      },
    },
    title: {
      paddingRight: "20%",
    },
    hi: {
      color: "red",
    },
    paragraph: {
      paddingRight: "20%",
    },
  })
);

function HeaderText() {
  const classes = useStyles();
  return (
    <Box
      component="main"
      role="main"
      itemScope
      itemType="https://schema.org/Person"
      className={classes.root}
    >
      <meta itemProp="familyName" content="Steger" />
      <meta itemProp="gender" content="https://schema.org/Male" />
      <meta itemProp="name" content="Patrick Steger" />
      <Typography
        className={classes.title}
        variant="h2"
        component="h1"
        gutterBottom
      >
        <span itemProp="givenName">Patrick Steger</span>
      </Typography>
      <Typography
        variant="h4"
        itemProp="disambiguatingDescription"
        component="h2"
        gutterBottom
      >
        Technology <span className={classes.hi}>Solution Architect</span>
      </Typography>
      <Typography itemProp="knowsAbout" className={classes.paragraph}>
      Web & Software Development & Architect | Database & Server Management | Business & Tech Mentor | IT Support | Bridging Technology, Business and Learning
      </Typography>
      <Buttons />
    </Box>
  );
}

export default HeaderText;
