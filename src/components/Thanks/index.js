import React from 'react';
import PropTypes from 'prop-types';
import Step from '../Step';
import ButtonContainer from '../ButtonContainer';

function Thanks({ nextStep, prevStep }) {
	const btnHidden = !prevStep;
	return (
		<Step step="4" heading="Thank you!" lastStep>
			<ButtonContainer handleNextStep={nextStep} btnHidden={btnHidden} />
		</Step>
	);
}

Thanks.propTypes = {
	nextStep: PropTypes.func,
	prevStep: PropTypes.func,
};

export default Thanks;

