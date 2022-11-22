import CardDetail from '../../components/CardDetail/CardDetail';
import styles from './Moba.module.scss';

import { Header } from '../../components/Header/Header';

import lol from '../../assets/img-cards/lol.jpg';
import dotaDois from '../../assets/img-cards/dotaDois.jpg';
import smite from '../../assets/img-cards/smite.jpg';

const Moba = () => {
  return (
    <>
      <Header titleCategory='MOBA' description='Um MOBA conta com dois times com cinco jogadores cada que se digladiam em um mapa simétrico até um dos lados conseguir destruir a base da equipe oponente.' />
      <section>
        <div className={styles.container}>
          <CardDetail image={lol} price='Free to play' titleCard='League of Legends' descriptionCard='No jogo, duas equipes de cinco jogadores batalham em um combate jogador contra jogador (PvP), com cada equipe ocupando e defendendo sua metade do mapa. Cada um dos dez jogadores controla um personagem, conhecido como "campeão", com habilidades únicas e diferentes estilos de jogo.' />

          <CardDetail image={dotaDois} price='Free to play' titleCard='Dota 2' descriptionCard='Diariamente, milhões de jogadores mundo afora batalham como um dentre os mais de cem heróis do Dota. Estejam jogando há 10 ou 1.000 horas, há sempre algo novo para descobrir.' />

          <CardDetail image={smite} price='Free to play' titleCard='Smite' descriptionCard='Junte-se a mais de 35 milhões de jogadores em SMITE, o campo de batalha dos deuses. Erga o martelo de Thor, transforme seus inimigos em estátua como a Medusa, ou escolha entre outros mais de 100 personagens icônicos da mitologia.' />
        </div>
      </section>
    </>
  )
}

export default Moba