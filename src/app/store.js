import { configureStore } from "@reduxjs/toolkit";
import categoriasSlice from "./reducers/cardCategoria";

const store = configureStore({
	reducer: {
		categorias:categoriasSlice
	},
});
export default store;
