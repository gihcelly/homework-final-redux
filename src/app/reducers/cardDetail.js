import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';

import counterStrike from '../../assets/img-cards/counter-strike.jpg';
import cod from '../../assets/img-cards/cod.jpg';
import rainbowSix from '../../assets/img-cards/rainbow-six.jpg';

import lol from '../../assets/img-cards/lol.jpg';
import dotaDois from '../../assets/img-cards/dotaDois.jpg';
import smite from '../../assets/img-cards/smite.jpg';

import newWorld from '../../assets/img-cards/newWorld.jpg';
import skyrim from '../../assets/img-cards/skyrim.jpg';
import wow from '../../assets/img-cards/wow.jpg';

import dayz from '../../assets/img-cards/dayz.jpg';
import sevenDays from '../../assets/img-cards/7-days.jpg';
import projectZomboid from '../../assets/img-cards/project-zomboid.jpg';

import armaTres from '../../assets/img-cards/armaTres.jpg';
import squad from '../../assets/img-cards/squad.jpg';
import readyOrNot from '../../assets/img-cards/ready.jpg';

const initialState = [
  {
    titleCard: 'Counter-Strike Global Offensive',
    descriptionCard: 'O Counter-Strike: Global Offensive (CS:GO) melhora a jogabilidade de ação baseada em equipes na qual foi pioneiro quando lançado há 19 anos.',
    price: 71.99,
    image: counterStrike,
    category: '/categoria/fps',
    id: uuid(),
    favorite: false
  },
  {
    titleCard: 'Call of Duty®: Modern Warfare® II',
    descriptionCard: 'O Call of Duty®: Modern Warfare® II coloca os jogadores dentro de um conflito global sem precedentes que conta com o retorno dos Operadores icônicos da Força-Tarefa 141.',
    price: 299.91,
    image: cod,
    category: '/categoria/fps',
    id: uuid(),
    favorite: false
  },
  {
    titleCard: "Tom Clancy's Rainbow Six Siege",
    descriptionCard: 'Domine a arte da destruição e do uso de gadgets em Tom Clancy’s Rainbow Six Siege. Enfrente combates intensos em curta distância, alta letalidade, decisões táticas, jogabilidade em equipe e ação explosiva a todo momento.',
    price: 59.99,
    image: rainbowSix,
    category: '/categoria/fps',
    id: uuid(),
    favorite: false
  },
  {
    titleCard: 'League of Legends',
    descriptionCard: 'No jogo, duas equipes de cinco jogadores batalham em um combate jogador contra jogador (PvP), com cada equipe ocupando e defendendo sua metade do mapa. Cada um dos dez jogadores controla um personagem, conhecido como "campeão", com habilidades únicas e diferentes estilos de jogo.',
    price: 0,
    image: lol,
    category: '/categoria/moba',
    id: uuid(),
    favorite: false
  },
  {
    titleCard: 'Dota 2',
    descriptionCard: 'Diariamente, milhões de jogadores mundo afora batalham como um dentre os mais de cem heróis do Dota. Estejam jogando há 10 ou 1.000 horas, há sempre algo novo para descobrir.',
    price: 0,
    image: dotaDois,
    category: '/categoria/moba',
    id: uuid(),
    favorite: false
  },
  {
    titleCard: 'SMITE',
    descriptionCard: 'Junte-se a mais de 35 milhões de jogadores em SMITE, o campo de batalha dos deuses. Erga o martelo de Thor, transforme seus inimigos em estátua como a Medusa, ou escolha entre outros mais de 100 personagens icônicos da mitologia.',
    price: 0,
    image: smite,
    category: '/categoria/moba',
    id: uuid(),
    favorite: false
  },
  {
    titleCard: 'New World',
    descriptionCard: 'Explore um MMORPG de mundo aberto emocionante e cheio de perigos e oportunidades, onde você irá forjar um novo destino na ilha sobrenatural de Aeternum.',
    price: 75.49,
    image: newWorld,
    category: '/categoria/rpg',
    id: uuid(),
    favorite: false
  },
  {
    titleCard: 'The Elder Scrolls V: Skyrim',
    descriptionCard: 'Skyrim é a terra natal de um povo bravo chamados de Nords (uma raça de humanos) onde além da Grande Guerra, irrompeu uma guerra civil após o assassinato do Alto Rei de Skyrim, Torygg. E diante de todas estas guerras e problemas, a província se encontra dividida: de um lado, os StormCloaks, rebeldes comandados por Ulfric.',
    price: 149.15,
    image: skyrim,
    category: '/categoria/rpg',
    id: uuid(),
    favorite: false
  },
  {
    titleCard: 'World of Warcraft',
    descriptionCard: 'O jogo estabeleceu um novo parâmetro no gênero MMORPG e reuniu uma legião de fãs ao redor do mundo. Apesar de ter caído bastante em popularidade ao longo dos anos e contar com gráficos 3D ultrapassados em comparação a novos títulos.',
    price: 40.25,
    image: wow,
    category: '/categoria/rpg',
    id: uuid(),
    favorite: false
  },
  {
    titleCard: 'DayZ',
    descriptionCard: 'Quanto você aguenta em um mundo pós-apocalíptico? Uma terra arrasada por "zumbis" infectados, onde você compete com outros sobreviventes por recursos limitados.',
    price: 119.99,
    image: dayz,
    category: '/categoria/sobrevivencia',
    id: uuid(),
    favorite: false
  },
  {
    titleCard: '7 Days to Die',
    descriptionCard: '7 Days to Die é um jogo de mundo aberto único que combina jogo de tiro em primeira pessoa, terror de sobrevivência, defesa de torre e RPG.',
    price: 44.99,
    image: sevenDays,
    category: '/categoria/sobrevivencia',
    id: uuid(),
    favorite: false
  },
  {
    titleCard: 'Project Zomboid',
    descriptionCard: 'Project Zomboid é um jogo eletrônico de terror de sobrevivência isométrico de mundo aberto em desenvolvimento pela desenvolvedora independente britânica e canadense The Indie Stone.',
    price: 37.99,
    image: projectZomboid,
    category: '/categoria/sobrevivencia',
    id: uuid(),
    favorite: false
  },
  {
    titleCard: 'Arma 3',
    descriptionCard: 'Viva um jogo de combate realista num mundo aberto militar descomunal. Arma 3 apresenta uma grande variedade militar para um ou mais jogadores, mais de 20 veículos e 40 armas, e oportunidades ilimitadas para criação de conteúdo.',
    price: 99.99,
    image: armaTres,
    category: '/categoria/simulacao',
    id: uuid(),
    favorite: false
  },
  {
    titleCard: 'SQUAD',
    descriptionCard: 'Squad é um jogo em primeira pessoa de 50 jogadores contra 50 que tem como objetivo capturar o realismo em combate através da comunicação e equipe. As principais características incluem jogabilidade de armas combinadas com veículos.',
    price: 93.99,
    image: squad,
    category: '/categoria/simulacao',
    id: uuid(),
    favorite: false
  },
  {
    titleCard: 'Ready or Not',
    descriptionCard: 'Ready or Not é um jogo de tiro em primeira pessoa, intenso, tático e atual. Nele, as unidades policiais da SWAT são chamadas para controlar situações de hostilidade e de confronto.',
    price: 89.99,
    image: readyOrNot,
    category: '/categoria/simulacao',
    id: uuid(),
    favorite: false
  }
];

const itens = createSlice({
  name: 'allItens',
  initialState,
  reducers: {
    changeFavorite: (state, { payload }) => {
      state = state.map((item) => {
        if(item.id === payload) item.favorite = !item.favorite;
        return item;
      });
    }
  }
});

export const { changeFavorite } = itens.actions;

export default itens.reducer;