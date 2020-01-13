import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Counter from './Counter'
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    color: theme.palette.common.white,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      height: '80vh',
      minHeight: 500,
      maxHeight: 1300,
    },
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(14),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.5,
    zIndex: -1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -2,
  },
  title: {
    flexGrow: 1,
  },

  counters: {
    width: 'fit-content',
	  backgroundColor:"#062F4F",
    '& svg': {
      margin: theme.spacing(2),
    },
    '& hr': {
      margin: theme.spacing(0, 0.5),
    },
    position: 'absolute',
    bottom: 0,
    zIndex: 100,
    boxShadow: "10px 10px 20px 0px rgba(0,0,0,.75)",
   
  },
});

function ProductHeroLayout(props) {
  const { backgroundClassName, classes } = props;

  return (
    <section id="manifiesto" className={classes.root}>
      <Container className={classes.container}>

          <Typography align="center" variant="h3" className={classes.title}>
            Observatorio del Machimo en la Red
          </Typography>
        <div className={classes.backdrop} />
        <div className={clsx(classes.background, backgroundClassName)} />
        <Grid container className={classes.counters}
              direction="row"
              justify="center"
              alignItems="flex-end"
              spacing={15}>
          <Counter end={3600} start={0} time={4000} texto="Tweets analizados"></Counter>
          <Counter end={1600} start={0} time={4000} texto="Tweets machistas"></Counter>
          <Counter end={30} start={0} time={4000} texto="Terminos analizados"></Counter>
        </Grid>
      </Container>
    </section>
  );
}

ProductHeroLayout.propTypes = {
  backgroundClassName: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHeroLayout);
