import React from 'react';
import PropTypes from 'prop-types';
import { Text, TextField } from 'rookie-styleguide';

function InputFields({
	selectedMethod,
	updateValue,
	values,
}) {
	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		updateValue(name, value);
	};
	if (selectedMethod === 'Mail') {
		return (
			<div>
				<Text is="label" htmlFor="Name">Name</Text>
				<TextField name="name" id="name" placeholder="First and last name" onChange={handleChange} value={values.name} />
				<Text is="label" htmlFor="address">Address</Text>
				<TextField name="address" id="address" onChange={handleChange} value={values.address} />
				<Text is="label" htmlFor="city">City</Text>
				<TextField name="city" id="city" onChange={handleChange} value={values.city} />
			</div>
		);
	}
	if (selectedMethod === 'Drone') {
		return (
			<div>
				<Text is="label" htmlFor="coordinatesLong">Coordinates, long</Text>
				<TextField type="number" name="coordinatesLong" id="cLong" onChange={handleChange} value={values.coordinatesLong} />
				<Text is="label" htmlFor="coordinatesLat">Coordinates, lat</Text>
				<TextField type="number" name="coordinatesLat" id="cLat" onChange={handleChange} value={values.coordinatesLat} />
			</div>
		);
	}
	if (selectedMethod === 'Teleport') {
		return (
			<div>
				<Text is="label" htmlFor="teleportId">Teleport-ID</Text>
			</div>
		);
	}
	return (
		<div />
	);
}

InputFields.propTypes = {
	selectedMethod: PropTypes.string,
	updateValue: PropTypes.func,
	values: PropTypes.objectOf(PropTypes.string),
};

export default InputFields;
