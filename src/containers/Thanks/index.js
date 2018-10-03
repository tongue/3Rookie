import React from 'react';
import PropTypes from 'prop-types';
import ThanksComponent from '../../components/Thanks';

function Thanks({ reset }) {
	return (
		<ThanksComponent nextStep={reset} />
	);
}

Thanks.propTypes = {
	reset: PropTypes.func,
};

export default Thanks;
