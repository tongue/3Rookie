import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Base from '../Base';

function RadioButton({
	is = 'input',
	type = 'radio',
	checked,
	id,
	value,
	...rest
}) {
	return (
		<Base
			is={is}
			type={type}
			name={name}
			id={id}
			value={value}
			checked={checked}
			{...rest}
		/>
	);
}

RadioButton.propTypes = {
	is: PropTypes.string,
	type: PropTypes.string,
	checked: PropTypes.bool,
	id: PropTypes.string,
	value: PropTypes.string,
};

export default RadioButton;

