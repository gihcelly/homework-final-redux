import { Header } from '../../components/Header/Header';
import { CardCategoria } from '../../components/CardCategoria/CardCategoria';
import styles from '../Home/Home.module.scss';
import fps from '../../assets/img-cardsCat/fps.jpg'
import sobrev from '../../assets/img-cardsCat/sobrevivencia.jpg'
import rpg from '../../assets/img-cardsCat/rpg.jpg'
import moba from '../../assets/img-cardsCat/moba.jpg'
import simulacao from '../../assets/img-cardsCat/simulacao.jpg'


const Home = () => {
  return (
    <>
      <Header titleCategory='Loja de Games' description='A melhor loja para você comprar os seus jogos favoritos!' />
      <div className={styles.container}>
        <div className = {styles.item} >
        <CardCategoria link={'/categoria/fps'} imagem={fps} nome = {'FPS'}/>
        <CardCategoria link={'/categoria/sobrevivencia'} imagem={sobrev} nome = {'Sobrevivência'}/>
        <CardCategoria link={'/categoria/rpg'} imagem={rpg} nome = {'RPG'}/>
        
        <CardCategoria link={'/categoria/moba'} imagem={moba} nome = {'Moba'}/>
        <CardCategoria link={'/categoria/simulacao'} imagem={simulacao} nome = {'Simulação'}/>
        </div>
        
      </div>
      
      
    </>
  )
}

export default Home