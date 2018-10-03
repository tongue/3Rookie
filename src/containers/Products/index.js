import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	fetchProducts,
	fetchProductsFulfilled,
	fetchProductsRejected,
	addProduct,
	removeProduct,
} from './actionCreators';
import selector from './selector';
import ProductComponent from '../../components/Products';

class Products extends Component {

	componentWillMount() {
		this.props.fetchProducts();
	}

	render() {
		const { products, nextStep } = this.props;
		return (
			<ProductComponent
				products={products}
				nextStep={nextStep}
				addProduct={this.props.addProduct}
				removeProduct={this.props.removeProduct}
			/>
		);
	}

}

Products.propTypes = {
	fetchProducts: PropTypes.func,
	products: PropTypes.shape({
		data: PropTypes.array,
		isLoading: PropTypes.bool,
		isLoaded: PropTypes.bool,
		selectedProduct: PropTypes.array,
	}),
	nextStep: PropTypes.func,
	addProduct: PropTypes.func,
	removeProduct: PropTypes.func,
};

export default connect(selector, {
	fetchProducts,
	fetchProductsFulfilled,
	fetchProductsRejected,
	addProduct,
	removeProduct,
})(Products);
