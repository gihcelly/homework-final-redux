import CardDetail from '../../components/CardDetail/CardDetail';
import styles from './FPS.module.scss';

import counterStrike from '../../assets/img-cards/counter-strike.jpg';
import valorant from '../../assets/img-cards/valorant.jpg';
import rainbowSix from '../../assets/img-cards/rainbow-six.jpg';

import { Header } from '../../components/Header/Header';

const FPS = () => {
  return (
    <>
      <Header titleCategory='First-Person Shooters' description='' />
      <section>
        <div className={styles.container}>
          <CardDetail image={counterStrike} price='Free to play' titleCard='Counter-Strike Global Offensive' descriptionCard='O Counter-Strike: Global Offensive (CS:GO) melhora a jogabilidade de ação baseada em equipes na qual foi pioneiro quando lançado há 19 anos.' />

          <CardDetail image={valorant} price='Free to play' titleCard='Valorant' descriptionCard='Um jogo de tiro competitivo 5x5 com personagens da Riot Games. Disponível no mundo todo. Centenas de maneiras de jogar, o único limite é a sua criatividade.' />

          <CardDetail image={rainbowSix} price='59,99' titleCard="Tom Clancy's Rainbow Six Siege" descriptionCard='Domine a arte da destruição e do uso de gadgets em Tom Clancy’s Rainbow Six Siege. Enfrente combates intensos em curta distância, alta letalidade, decisões táticas, jogabilidade em equipe e ação explosiva a todo momento.' />
        </div>
      </section>
    </>
  )
}

export default FPS