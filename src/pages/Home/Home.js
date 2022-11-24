import styles from '../Home/Home.module.scss';

import { Header } from '../../components/Header/Header';
import { CardsCategoria} from '../../components/CardCategoria/CardCategoria';

const Home = () => {
  return (
    <>
      <Header titleCategory='Games Store' description='A melhor loja para você comprar os seus jogos favoritos!' />
      <div className={styles.container}>
        <div className = {styles.item} >
          <CardsCategoria />
        </div>
      </div>
    </>
  )
}

export default Home