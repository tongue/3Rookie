import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import selector from './selector';
import ConfirmComponent from '../../components/Confirm';

function Confirm({
	nextStep,
	prevStep,
	productData,
	selectedMethod,
	deliveryData,
}) {
	return (
		<ConfirmComponent
			productData={productData}
			selectedMethod={selectedMethod}
			deliveryData={deliveryData}
			nextStep={nextStep}
			prevStep={prevStep}
		/>
	);
}

Confirm.propTypes = {
	productData: PropTypes.arrayOf(PropTypes.object),
	selectedMethod: PropTypes.string,
	deliveryData: PropTypes.shape({
		name: PropTypes.string,
		address: PropTypes.string,
		city: PropTypes.string,
		coordinatesLat: PropTypes.string,
		coordinatesLong: PropTypes.string,
		teleportId: PropTypes.string,
	}),
	nextStep: PropTypes.func,
	prevStep: PropTypes.func,
};

export default connect(selector)(Confirm);
