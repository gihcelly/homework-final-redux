import CardDetail from '../../components/CardDetail/CardDetail';
import styles from './Sobrevivencia.module.scss';

import { Header } from '../../components/Header/Header';

import dayz from '../../assets/img-cards/dayz.jpg';
import sevenDays from '../../assets/img-cards/7-days.jpg';
import projectZomboid from '../../assets/img-cards/project-zomboid.jpg';

const Sobrevivencia = () => {
  return (
    <>
      <Header titleCategory='Sobrevivência' description='Jogo de sobrevivência é um subgênero de jogos eletrônicos de ação que geralmente libera o jogador com os mínimos recursos possíveis em um mapa de mundo aberto hostil.' />
      <section>
        <div className={styles.container}>
          <CardDetail image={dayz} price='119,99' titleCard='DayZ' descriptionCard='Quanto você aguenta em um mundo pós-apocalíptico? Uma terra arrasada por "zumbis" infectados, onde você compete com outros sobreviventes por recursos limitados.' />

          <CardDetail image={sevenDays} price='44,99' titleCard='7 Days to Die' descriptionCard='7 Days to Die é um jogo de mundo aberto único que combina jogo de tiro em primeira pessoa, terror de sobrevivência, defesa de torre e RPG' />

          <CardDetail image={projectZomboid} price='37,99' titleCard='Project Zomboid' descriptionCard='Project Zomboid é um jogo eletrônico de terror de sobrevivência isométrico de mundo aberto em desenvolvimento pela desenvolvedora independente britânica e canadense The Indie Stone.' />
        </div>
      </section>
    </>
  )
}

export default Sobrevivencia