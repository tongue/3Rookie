import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';

function Heading({
	is = 'h1',
	...rest
}) {
	return (
		<Text heading is={is} {...rest} />
	);
}

Heading.propTypes = {
	is: PropTypes.string,
};

export default Heading;

