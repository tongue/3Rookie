import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Base from '../Base';

function Checkbox({
	is = 'input',
	type = 'checkbox',
	id,
	value,
	...rest
}) {
	return (
		<Base
			is={is}
			type={type}
			id={id}
			value={value}
			{...rest}
		/>
	);
}

Checkbox.propTypes = {
	is: PropTypes.string,
	type: PropTypes.string,
	id: PropTypes.number,
	value: PropTypes.string,
};

export default Checkbox;

