import React from 'react';
import ReactDOM from 'react-dom';
import Base from './components/Base';
import Container from './components/Container';
import Text from './components/Text';
import Heading from './components/Heading';
import ButtonBack from './components/ButtonBack';
import ButtonNext from './components/ButtonNext';
import List from './components/List';
import RadioButton from './components/RadioButton';
import Checkbox from './components/Checkbox';
import TextField from './components/TextField';
import 'normalize.css';


const Styleguide = () =>
	<Base>
		<Container>
			<Text is="h2" stepHeading>Step <span>1</span></Text>
			<Heading>Choose products</Heading>
			<Text is="h3" bold >Small heading</Text>
			<div>
				<Checkbox name="products" id="p1" value="React for dummies" checked />
				<Text is="label" for="p1" checkbox>React for dummies</Text>
				<Checkbox name="products" id="p2" value="Redux for dummies" />
				<Text is="label" for="p2" checkbox>Redux for dummies</Text>
				<Checkbox name="products" id="p3" value="CSS for dummies" />
				<Text is="label" for="p3" checkbox>CSS for dummies</Text>
			</div>
			<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
			<List>
				<Text is="li" listText>One</Text>
				<Text is="li" listText>Two</Text>
				<Text is="li" listText>Three</Text>
			</List>
			<div>
				<RadioButton name="delivery" id="alt1" value="Mail" />
				<Text is="label" for="alt1" radio>Mail</Text>
				<RadioButton name="delivery" id="alt2" value="Drone" />
				<Text is="label" for="alt2" radio>Drone</Text>
				<RadioButton name="delivery" id="alt3" value="Teleport" checked />
				<Text is="label" for="alt3" radio>Teleport</Text>
			</div>
			<div>
				<Text is="label" for="Name">Name</Text>
				<TextField name="name" id="name" placeholder="First and last name" />
				<Text is="label" for="address">Address</Text>
				<TextField name="address" id="address" />
				<Text is="label" for="city">City</Text>
				<TextField name="city" id="city" />
			</div>
			<ButtonBack disabled />
			<ButtonNext />
		</Container>
	</Base>;

ReactDOM.render(
	<Styleguide />,
	document.getElementById('app'),
);
