import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TimeIcon from "@material-ui/icons/AccessTime";
import CodeIcon from "@material-ui/icons/Code";
import { Box, IconButton, Link, Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import NextLink from "next/link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bigButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        width: "48%",
        marginRight: theme.spacing(0),
      },
    },
    bigButtonsContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        justifyContent: "space-between",
      },
    },
  })
);

function Buttons() {
  const classes = useStyles();
  return (
    <>
      <Box mx={-1}>
        <Link
          href="http://linkedin.com/in/p-steger/"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          itemProp="sameAs"
        >
          <IconButton
            aria-label="Github repository link"
            aria-haspopup="true"
            color="inherit"
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Link>
        <Link
          href="https://github.com/codeoutin"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          itemProp="sameAs"
        >
          <IconButton
            aria-label="Github profile"
            aria-haspopup="true"
            color="inherit"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Link>
      <Link
          href="https://form.jotform.com/240150864057453"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          itemProp="sameAs"
        >
          <IconButton
            aria-label="CV"
            aria-haspopup="true"
            color="inherit"
          >
            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path fill="#ffffff" d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-1 1h-16v20h16v-20zm-2 16h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z"/></svg>
          </IconButton>
        </Link>
      </Box>
      <Box className={classes.bigButtonsContainer} mt={2}>
        <NextLink 
          href="https://calendly.com/psteger" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button
            variant="contained"
            color="secondary"
            disableElevation
            className={classes.bigButton}
            startIcon={<TimeIcon />}
            href="https://calendly.com/psteger"
            target="_blank"
          >
            Schedule a call
          </Button>
        </NextLink>
        <NextLink href="/projects">
          <Button
            component="a"
            variant="outlined"
            color="secondary"
            className={classes.bigButton}
            startIcon={<CodeIcon />}
            href="/projects"
          >
            See my work
          </Button>
        </NextLink>
      </Box>
    </>
  );
}

export default Buttons;
