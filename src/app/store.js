import { configureStore } from '@reduxjs/toolkit';

import itens from './reducers/cardDetail';

const store = configureStore({
    reducer: {

        allItens: itens
    }
});

export default store;