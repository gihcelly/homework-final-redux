import CardDetail from '../../components/CardDetail/CardDetail';
import styles from './Simulacao.module.scss';

import { Header } from '../../components/Header/Header';

import armaTres from '../../assets/img-cards/armaTres.jpg';
import squad from '../../assets/img-cards/squad.jpg';
import readyOrNot from '../../assets/img-cards/ready.jpg';

const Simulacao = () => {
  return (
    <>
      <Header titleCategory='Simulação' description='A principal característica dos jogos de simulação é a de simular atividades da vida real, muitos desses jogos deixam você livre para explorar as principais mecânicas do game sem prender muito à missões ou história.' />
      <section>
        <div className={styles.container}>
          <CardDetail image={armaTres} price='99,99' titleCard='Arma 3' descriptionCard='Viva um jogo de combate realista num mundo aberto militar descomunal. Arma 3 apresenta uma grande variedade militar para um ou mais jogadores, mais de 20 veículos e 40 armas, e oportunidades ilimitadas para criação de conteúdo.' />

          <CardDetail image={squad} price='93,99' titleCard='Squad' descriptionCard='Squad é um jogo em primeira pessoa de 50 jogadores contra 50 que tem como objetivo capturar o realismo em combate através da comunicação e equipe. As principais características incluem jogabilidade de armas combinadas com veículos.' />

          <CardDetail image={readyOrNot} price='89,99' titleCard='Ready or Not' descriptionCard='Ready or Not é um jogo de tiro em primeira pessoa, intenso, tático e atual. Nele, as unidades policiais da SWAT são chamadas para controlar situações de hostilidade e de confronto.' />
        </div>
      </section>
    </>
  )
}

export default Simulacao