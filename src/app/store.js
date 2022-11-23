import { configureStore } from "@reduxjs/toolkit";

import categoriesSlice from "./reducers/cardCategoria";
import itens from './reducers/cardDetail';
import searchSlice from './reducers/search'
import cartReducer from "./reducers/cartReducer";

const store = configureStore({
	reducer: {
		categories: categoriesSlice,
    	allItens: itens,
		search: searchSlice,
		cart: cartReducer
	}
});

export default store;