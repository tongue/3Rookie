import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Base from '../Base';

function Button({
	is = 'button',
	disabled,
	...rest
}) {
	return (
		<Base is={is} disabled={disabled} {...rest} />
	);
}

Button.propTypes = {
	is: PropTypes.string,
	disabled: PropTypes.bool,
};

export default Button;

