import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';
import Base from '../Base';

function TextField({
	is = 'input',
	type = 'text',
	name,
	id,
	placeholder,
	value = '',
	...rest
}) {
	const className = classnames({
		textFieldBase: true,
	});
	return (
		<Base
			is={is}
			type={type}
			className={className}
			name={name}
			id={id}
			placeholder={placeholder}
			value={value}
			{...rest}
		/>
	);
}

TextField.propTypes = {
	is: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string,
	id: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string,
};

export default TextField;

