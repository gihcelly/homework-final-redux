import { configureStore } from "@reduxjs/toolkit";

import categoriesSlice from "./reducers/cardCategoria";
import itens from './reducers/cardDetail';

const store = configureStore({
	reducer: {
		categories: categoriesSlice,
    allItens: itens
	}
});

export default store;