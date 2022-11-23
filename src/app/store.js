import { configureStore } from "@reduxjs/toolkit";

import categoriesSlice from "./reducers/cardCategoria";
import itens from './reducers/cardDetail';
import cartReducer from "./reducers/cartReducer";

const store = configureStore({
	reducer: {
		categories: categoriesSlice,
    allItens: itens,
		cart: cartReducer
	}
});

export default store;