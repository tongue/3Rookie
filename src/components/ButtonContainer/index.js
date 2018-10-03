import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ButtonBack, ButtonNext } from 'rookie-styleguide';
import './styles.scss';

function ButtonContainer({
	btnDisabled,
	btnHidden,
	handlePrevStep,
	handleNextStep,
	...rest
}) {
	const className = classnames({
		buttonContainer: true,
	});
	let style;
	if (btnHidden) {
		style = {
			display: 'none',
		};
	}
	return (
		<div className={className}>
			<ButtonBack onClick={handlePrevStep} style={style} {...rest} />
			<ButtonNext onClick={handleNextStep} disabled={btnDisabled} {...rest} />
		</div>
	);
}

ButtonContainer.propTypes = {
	btnDisabled: PropTypes.bool,
	btnHidden: PropTypes.bool,
	handleNextStep: PropTypes.func,
	handlePrevStep: PropTypes.func,
};

export default ButtonContainer;

