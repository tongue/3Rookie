import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';
import Base from '../Base';

function Loader({
	is = 'div',
	...rest
}) {
	const className = classnames({
		loaderBase: true,
	});
	return (
		<Base is={is} className={className} {...rest}>
			<span />
			<span />
			<span />
		</Base>
	);
}

Loader.propTypes = {
	is: PropTypes.string,
};

export default Loader;
