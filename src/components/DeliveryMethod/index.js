import React from 'react';
import PropTypes from 'prop-types';
import { RadioButton, Text } from 'rookie-styleguide';
import Step from '../Step';
import Form from '../Form';
import InputFields from './InputFields';

// Disable button if form is not valid
function disableButton(deliveryMethod = '', fields = {}) {
	const formInputs = {
		Mail: ['name', 'address', 'city'],
		Drone: ['coordinatesLong', 'coordinatesLat'],
	};
	const form = formInputs[deliveryMethod];
	if (typeof form === 'undefined') {
		return true;
	}
	const disabled = form.some(field => typeof fields[field] === 'undefined' || fields[field] === '');
	return disabled;
}

function DeliveryMethod({
	methods,
	nextStep,
	prevStep,
	addMethod,
	updateValue,
}) {
	const handleChange = (methodValue) => {
		if (!methods.selectedMethod.includes(methodValue)) {
			addMethod(methodValue);
		}
	};

	const methodList = methods.data.map((method, i) =>
		<div key={i}>
			<RadioButton
				name="delivery"
				id={`alt${i}`}
				value={method}
				checked={methods.selectedMethod.includes(method)}
				onChange={() => handleChange(method)}
			/>
			<Text is="label" htmlFor={`alt${i}`} radio>{method}</Text>
		</div>,
	);

	return (
		<Step step="2" heading="Delivery">
			<Form
				btnDisabled={disableButton(methods.selectedMethod, methods.values)}
				handleNextStep={nextStep}
				handlePrevStep={prevStep}
			>
				<div className="radioContainer">
					{methodList}
				</div>
				{methods.selectedMethod &&
					<div className="inputContainer">
						<Text bold>By {methods.selectedMethod}</Text>
						<InputFields
							selectedMethod={methods.selectedMethod}
							updateValue={updateValue}
							values={methods.values}
						/>
					</div>
				}
			</Form>
		</Step>
	);
}

DeliveryMethod.propTypes = {
	methods: PropTypes.shape({
		data: PropTypes.array,
		selectedProduct: PropTypes.string,
	}),
	nextStep: PropTypes.func,
	prevStep: PropTypes.func,
	addMethod: PropTypes.func,
	updateValue: PropTypes.func,
};

export default DeliveryMethod;

