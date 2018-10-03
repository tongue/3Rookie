import React from 'react';
import PropTypes from 'prop-types';

function Base({
	is = 'div',
	...rest
}) {
	const Component = is;
	return (
		<Component {...rest} />
	);
}

Base.propTypes = {
	is: PropTypes.string,
};

export default Base;

