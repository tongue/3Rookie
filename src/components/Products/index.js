import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Loader, Text } from 'rookie-styleguide';
import Step from '../Step';
import Form from '../Form';

function Products({
	products,
	nextStep,
	prevStep,
	addProduct,
	removeProduct,
	...rest
}) {
	const btnHidden = !prevStep;

	if (products.isLoading) {
		return (
			<Step step="1" {...rest}>
				<Loader />
			</Step>
		);
	}

	if (products.isLoaded) {
		const handleChange = (productId) => {
			if (products.selectedProduct.includes(productId)) {
				removeProduct(productId);
			} else {
				addProduct(productId);
			}
		};
		const productList = products.data.map((product, i) =>
			<div key={i}>
				<Checkbox
					id={product.id}
					value={product.name}
					checked={products.selectedProduct.includes(product.id)}
					onChange={() => handleChange(product.id)}
				/>
				<Text is="label" htmlFor={product.id} checkbox>{product.name}</Text>
			</div>,
		);
		return (
			<Step step="1" heading="Choose products" {...rest}>
				<Form btnHidden={btnHidden} handleNextStep={nextStep}>
					<div className="checkboxContainer">
						{productList}
					</div>
				</Form>
			</Step>
		);
	}

	// Error
	if (!products.isLoading && !products.isLoaded) {
		console.warn(products.data);
		return (
			<Step step="1" {...rest}>
				<Text>Could not load content</Text>
			</Step>
		);
	}

	// Default content
	return (
		<Step step="1" {...rest} />
	);
}

Products.propTypes = {
	products: PropTypes.shape({
		data: PropTypes.array,
		isLoading: PropTypes.bool,
		isLoaded: PropTypes.bool,
		selectedProduct: PropTypes.array,
	}),
	nextStep: PropTypes.func,
	prevStep: PropTypes.func,
	addProduct: PropTypes.func,
	removeProduct: PropTypes.func,
	addSelectedProducts: PropTypes.func,
};

export default Products;
