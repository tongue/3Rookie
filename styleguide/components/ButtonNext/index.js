import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '../Button';

function ButtonNext({
	disabled,
	...rest
}) {
	const className = classnames({
		buttonBase: true,
		buttonForward: true,
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

ButtonNext.propTypes = {
	disabled: PropTypes.bool,
};

export default ButtonNext;
