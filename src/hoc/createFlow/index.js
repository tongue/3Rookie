import React from 'react';
import { connect } from 'react-redux';
import { nextStep, prevStep, reset } from './actionCreators';
import selector from './selector';

function createFlow({ steps = [] }) {
	const Flow = ({ activeStep, ...rest }) => {
		const ActiveStep = steps[activeStep];
		return (
			<div>
				<ActiveStep {...rest} />
			</div>
		);
	};
	return connect(selector, { nextStep, prevStep, reset })(Flow);
}

export default createFlow;
