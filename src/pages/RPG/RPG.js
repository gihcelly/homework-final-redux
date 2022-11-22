import CardDetail from '../../components/CardDetail/CardDetail';
import styles from './RPG.module.scss';

import { Header } from '../../components/Header/Header';

import newWorld from '../../assets/img-cards/newWorld.jpg';
import skyrim from '../../assets/img-cards/skyrim.jpg';
import wow from '../../assets/img-cards/wow.jpg';

const RPG = () => {
  return (
    <>
      <Header titleCategory='Role Playing Game' description='Role-playing game, também conhecido como RPG, é um tipo de jogo em que os jogadores assumem papéis de personagens e criam narrativas colaborativamente.' />
      <section>
        <div className={styles.container}>
          <CardDetail image={newWorld} price='75,49' titleCard='New World' descriptionCard='Explore um MMORPG de mundo aberto emocionante e cheio de perigos e oportunidades, onde você irá forjar um novo destino na ilha sobrenatural de Aeternum.' />

          <CardDetail image={skyrim} price='149,00' titleCard='The Elder Scrolls V: Skyrim' descriptionCard='Skyrim é a terra natal de um povo bravo chamados de Nords (uma raça de humanos) onde além da Grande Guerra, irrompeu uma guerra civil após o assassinato do Alto Rei de Skyrim, Torygg. E diante de todas estas guerras e problemas, a província se encontra dividida: de um lado, os StormCloaks, rebeldes comandados por Ulfric.' />

          <CardDetail image={wow} price='40,00' titleCard='World of Warcraft' descriptionCard='O jogo estabeleceu um novo parâmetro no gênero MMORPG e reuniu uma legião de fãs ao redor do mundo. Apesar de ter caído bastante em popularidade ao longo dos anos e contar com gráficos 3D ultrapassados em comparação a novos títulos.' />
        </div>
      </section>
    </>
  )
}

export default RPG