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
        <span className={classes.hi}>Hi, </span>I'm{" "}
        <span itemProp="givenName">Patrick</span>
      </Typography>
      <Typography
        variant="h4"
        itemProp="disambiguatingDescription"
        component="h2"
        gutterBottom
      >
        A software engineer in Berlin
      </Typography>
      <Typography itemProp="knowsAbout" className={classes.paragraph}>
        I work as a freelancer to help your company achieve its goals by providing sustainable and
        scalable solutions.{" "}
        I'm backed up by a team of project managers, creatives and developers to accomplish projects of any size.
      </Typography>
      <Buttons />
    </Box>
  );
}

export default HeaderText;
