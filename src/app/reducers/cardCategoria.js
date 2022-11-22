
import fps from '../../assets/img-cardsCat/fps.jpg'
import sobrev from '../../assets/img-cardsCat/sobrevivencia.jpg'
import rpg from '../../assets/img-cardsCat/rpg.jpg'
import moba from '../../assets/img-cardsCat/moba.jpg'
import simulacao from '../../assets/img-cardsCat/simulacao.jpg'
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        name: 'FPS',
        thumbnail: fps,
        id: 'fps'
    }, {
        name: 'Sobrevivência',
        thumbnail: sobrev,
        id: 'sobrevivencia'
    }, {
        name: 'RPG',
        thumbnail: rpg,
        id: 'rpg'
    }, {
        name: 'Moba',
        thumbnail: moba,
        id: 'moba'
    }, {
        name: 'Simulação',
        thumbnail: simulacao,
        id: 'simulacao'
    }
];

const categoriasSlice = createSlice({
    name: 'categorias',
    initialState,
  });
  
  export default categoriasSlice.reducer;