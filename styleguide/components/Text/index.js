import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';
import Base from '../Base';

function Text({
	is = 'p',
	bold,
	heading,
	stepHeading,
	subHeading,
	listText,
	radio,
	checkbox,
	textField,
	...rest
}) {
	const className = classnames({
		textBase: true,
		textBold: bold,
		textHeading: heading,
		textStepHeading: stepHeading,
		textSubHeading: subHeading,
		listItem: listText,
		radioLabel: radio,
		checkboxLabel: checkbox,
		textFieldLabel: textField,
	});
	return (
		<Base is={is} className={className} {...rest} />
	);
}

Text.propTypes = {
	is: PropTypes.string,
	bold: PropTypes.bool,
	heading: PropTypes.bool,
	stepHeading: PropTypes.bool,
	subHeading: PropTypes.bool,
	listText: PropTypes.bool,
	radio: PropTypes.bool,
	checkbox: PropTypes.bool,
	textField: PropTypes.bool,
};

export default Text;

