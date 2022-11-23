import { configureStore } from "@reduxjs/toolkit";

import categoriesSlice from "./reducers/cardCategoria";
import itens from './reducers/cardDetail';
import searchSlice from './reducers/search'

const store = configureStore({
	reducer: {
		categories: categoriesSlice,
    	allItens: itens,
		search: searchSlice
	}
});

export default store;