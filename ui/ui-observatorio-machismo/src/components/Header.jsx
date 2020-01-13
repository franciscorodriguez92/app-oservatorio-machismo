import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ProductHeroLayout from './ProductHeroLayout';
import image from '../img/manifiesto2.jpg'


const backgroundImage = image;

const styles = theme => ({
	background: {
		backgroundImage: `url(${backgroundImage})`,
		backgroundColor: '#7fc7d9', // Average color of the background image.,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center center",
		backgroundSize: "cover",
		//	backgroundAttachment: "fixed",
		height: "100%",
	},

});

function Manifiesto(props) {
	const { classes } = props;

	return (
		<ProductHeroLayout backgroundClassName={classes.background}>
			{/* Increase the network loading priority of the background image. */}
			<img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
		</ProductHeroLayout>

	);
}

Manifiesto.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Manifiesto);