import { configureStore } from "@reduxjs/toolkit";

import categoriasSlice from "./reducers/cardCategoria";
import itens from './reducers/cardDetail';

const store = configureStore({
	reducer: {
		categorias: categoriasSlice,
        allItens: itens
	}
});

export default store;