import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import eases from 'eases';
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider';

const paperStyle= {
	backgroundColor:"transparent",
	color:"#ffffff",
	padding:"40px",
	marginLeft:"20px",
	marginRigth:"20px",
};

export default class Counter extends Component {
	static propTypes = {
		start: PropTypes.number,
		end: PropTypes.number.isRequired,
		digits: PropTypes.number,
		time: PropTypes.number,
		easing: PropTypes.string,
		onComplete: PropTypes.func,
		style: PropTypes.any,
		texto: PropTypes.string,
	};

	static defaultProps = {
		start: 0,
		digits: 0,
		time: 1000,
		easing: 'linear',
	};

	state = { value: this.props.start };

	componentDidMount() {
		this.startTime = Date.now();
		requestAnimationFrame(this.animate.bind(this));
	}

	animate() {
		const { onComplete } = this.props;

		if (this.stop) {
			if (onComplete) onComplete();
			return;
		}

		requestAnimationFrame(this.animate.bind(this));
		this.draw();
	}

	draw() {
		const { time, start, end, easing } = this.props;

		const now = Date.now();
		if (now - this.startTime >= time) this.stop = true;
		const percentage = Math.min((now - this.startTime) / time, 1);
		const easeVal = eases[easing](percentage);
		const value = start + (end - start) * easeVal;

		this.setState({ value });
	}

	render() {
		const { digits, style, texto } = this.props;
		const { value } = this.state;

		return (
			<Paper style={paperStyle}>
				<Typography style={style}>{value.toFixed(digits)}</Typography>
				<Divider orientation="vertical" />
				<Typography style={style}> {texto}</Typography>
			</Paper>
		);
	}
}