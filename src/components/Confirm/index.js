import React from 'react';
import PropTypes from 'prop-types';
import { List, Text } from 'rookie-styleguide';
import Step from '../Step';
import ButtonContainer from '../ButtonContainer';

function Confirm({
	productData,
	selectedMethod,
	deliveryData,
	nextStep,
	prevStep,
}) {
	// List selected products
	const selectedProducts = productData.map((product, index) =>
		<Text key={index} is="li" listText>{product.name}</Text>,
	);

	return (
		<Step step="3" heading="Confirmation">
			<Text bold>Products</Text>
			<List>
				{selectedProducts}
			</List>
			<Text bold>Delivery</Text>
			<Text subHeading>{selectedMethod} to</Text>
			<ButtonContainer handleNextStep={nextStep} handlePrevStep={prevStep} />
		</Step>
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

export default Confirm;

