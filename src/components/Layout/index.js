import React from 'react';
import createFlow from '../../hoc/createFlow';
import Products from '../../containers/Products';
import DeliveryMethod from '../../containers/DeliveryMethod';
import Confirm from '../../containers/Confirm';
import Thanks from '../../containers/Thanks';

const ShoppingFlow = createFlow({
	steps: [Products, DeliveryMethod, Confirm, Thanks],
});

export default ShoppingFlow;
