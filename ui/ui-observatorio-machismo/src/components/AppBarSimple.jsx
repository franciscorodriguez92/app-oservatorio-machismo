import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles(theme => ({
  root: {
    width: "96%",
    margin: "30px",
    backgroundColor: "#813772",
    position: "fixed",
    boxShadow: "10px 10px 20px 0px rgba(0,0,0,.75)",
    borderRadius: "7px 7px 7px 7px",
  },
  title: {
    flexGrow: 1,
  },
  colorButton:
  {
    color: "#ffffff",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div >
      <AppBar className={classes.root}>
        <Toolbar >
          <ButtonGroup variant="text" aria-label="text primary button group" className={classes.title}>
            <Button className={classes.colorButton} href="manifiesto">Manifiesto</Button>
            <Button className={classes.colorButton} href="#terminos">Terminos</Button>
            <Button className={classes.colorButton} href="#estadisticas">Estadisticas</Button>
          </ButtonGroup>
          <ButtonGroup variant="outlined" color="primary" aria-label="outlined primary button group">
            <IconButton aria-label="contact">
              <ContactMailIcon className={classes.colorButton} />
            </IconButton>
            <IconButton aria-label="twitter" href="https://twitter.com" target="_blank">
              <TwitterIcon className={classes.colorButton} />
            </IconButton>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </div>
  );
}