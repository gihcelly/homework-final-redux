import CardDetail from '../../components/CardDetail/CardDetail';
import styles from './FPS.module.scss';

import counterStrike from '../../assets/img-cards/counter-strike.jpg';
import cod from '../../assets/img-cards/cod.jpg';
import rainbowSix from '../../assets/img-cards/rainbow-six.jpg';

import { Header } from '../../components/Header/Header';

const FPS = () => {
  return (
    <>
      <Header titleCategory='First Person Shooters' description='Os jogos FPS são exatamente o que o nome descreve: jogos em que a visão do personagem é em primeira pessoa e a mesma do jogador, para maior imersão.' />
      <section>
        <div className={styles.container}>
          <CardDetail image={counterStrike} price='71,99 ( Prime )' titleCard='Counter-Strike Global Offensive' descriptionCard='O Counter-Strike: Global Offensive (CS:GO) melhora a jogabilidade de ação baseada em equipes na qual foi pioneiro quando lançado há 19 anos.' />

          <CardDetail image={cod} price='299,90' titleCard='Call of Duty®: Modern Warfare® II' descriptionCard='O Call of Duty®: Modern Warfare® II coloca os jogadores dentro de um conflito global sem precedentes que conta com o retorno dos Operadores icônicos da Força-Tarefa 141.' />

          <CardDetail image={rainbowSix} price='59,99' titleCard="Tom Clancy's Rainbow Six Siege" descriptionCard='Domine a arte da destruição e do uso de gadgets em Tom Clancy’s Rainbow Six Siege. Enfrente combates intensos em curta distância, alta letalidade, decisões táticas, jogabilidade em equipe e ação explosiva a todo momento.' />
        </div>
      </section>
    </>
  )
}

export default FPS