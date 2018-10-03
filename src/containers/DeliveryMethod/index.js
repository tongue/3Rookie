import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import selector from './selector';
import {
	addMethod,
	updateValue,
} from './actionCreators';
import DeliveryComponent from '../../components/DeliveryMethod';

function DeliveryMethod({
	methods,
	nextStep,
	prevStep,
	...rest
}) {
	return (
		<DeliveryComponent
			methods={methods}
			nextStep={nextStep}
			prevStep={prevStep}
			{...rest}
		/>
	);
}

DeliveryMethod.propTypes = {
	methods: PropTypes.shape({
		data: PropTypes.array,
		selectedProduct: PropTypes.string,
	}),
	nextStep: PropTypes.func,
	prevStep: PropTypes.func,
};

export default connect(selector, {
	addMethod,
	updateValue,
})(DeliveryMethod);

