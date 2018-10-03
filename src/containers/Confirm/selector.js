const selector = (state) => {
	const products = state.products.data;
	const selectedProduct = state.products.selectedProduct;
	const selectedMethod = state.methods.selectedMethod;
	const inputValues = state.methods.values;

	// Combine product label and id
	const productData = [];
	selectedProduct.forEach((product) => {
		productData.push(products.find(item => item.id === product));
	});

	// Filter input data based on selected method
	const methodLabels = {
		Mail: ['name', 'address', 'city'],
		Drone: ['coordinatesLong', 'coordinatesLat'],
		Teleport: ['teleportId'],
	};
	const selectedMethodLabels = methodLabels[selectedMethod];
	const deliveryData = Object.keys(inputValues)
	.filter(key => selectedMethodLabels.includes(key))
	.reduce((acc, key) =>
		({
			...acc,
			[key]: inputValues[key],
		})
	, {});

	return {
		productData,
		selectedMethod,
		deliveryData,
	};
};

export default selector;
