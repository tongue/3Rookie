import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';
import Base from '../Base';

function List({
	is = 'ul',
	...rest
}) {
	const className = classnames({
		listWrapper: true,
	});
	return (
		<Base is={is} className={className} {...rest} />
	);
}

List.propTypes = {
	is: PropTypes.string,
};

export default List;

