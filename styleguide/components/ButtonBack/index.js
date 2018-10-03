import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '../Button';

function ButtonBack({
	disabled,
	...rest
}) {
	const className = classnames({
		buttonBase: true,
		buttonBack: true,
		buttonDisabled: disabled,
	});
	return (
		<div className="hoverEffect" {...rest}>
			<div>
				<Button className={className} disabled={disabled} />
			</div>
		</div>
	);
}

ButtonBack.propTypes = {
	disabled: PropTypes.bool,
};

export default ButtonBack;

