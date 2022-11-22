import { Header } from '../../components/Header/Header';
import { CardsCategoria} from '../../components/CardCategoria/CardCategoria';
import styles from '../Home/Home.module.scss';


const Home = () => {
  return (
    <>
      <Header titleCategory='Loja de Games' description='A melhor loja para você comprar os seus jogos favoritos!' />
      <div className={styles.container}>
        <div className = {styles.item} >
          <CardsCategoria/>
        </div>
      </div>
    </>
  )
}

export default Home