import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';
import Base from '../Base';

function Container({
	is = 'div',
	...rest
}) {
	const className = classnames({ containerBase: true });
	return (
		<Base is={is} className={className} {...rest} />
	);
}

Container.propTypes = {
	is: PropTypes.string,
};

export default Container;

