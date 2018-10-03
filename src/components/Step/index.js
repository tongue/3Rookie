import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Container, Heading, Text } from 'rookie-styleguide';
import './styles.scss';

function Step({
	is = 'section',
	heading,
	step,
	lastStep,
	children,
	...rest
}) {
	const className = classnames({
		stepBase: true,
		lastStep: lastStep,
	});
	const Component = is;
	return (
		<Component className={className} {...rest}>
			<Container>
				<Text is="h2" stepHeading>Step <span>{step}</span></Text>
				<Heading>{heading}</Heading>
				{children}
			</Container>
		</Component>
	);
}

Step.propTypes = {
	is: PropTypes.string,
	step: PropTypes.string,
	heading: PropTypes.string,
	lastStep: PropTypes.bool,
	children: PropTypes.node,
};

export default Step;

