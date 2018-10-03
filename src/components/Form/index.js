import React from 'react';
import PropTypes from 'prop-types';
import ButtonContainer from '../ButtonContainer';
import './styles.scss';

function Form({
	btnDisabled,
	btnHidden,
	children,
	handlePrevStep,
	handleNextStep,
	...rest
}) {
	return (
		<form {...rest}>
			{children}
			<ButtonContainer
				btnDisabled={btnDisabled}
				btnHidden={btnHidden}
				handlePrevStep={handlePrevStep}
				handleNextStep={handleNextStep}
			/>
		</form>
	);
}

Form.propTypes = {
	btnDisabled: PropTypes.bool,
	btnHidden: PropTypes.bool,
	children: PropTypes.node,
	handleNextStep: PropTypes.func,
	handlePrevStep: PropTypes.func,
};

export default Form;

