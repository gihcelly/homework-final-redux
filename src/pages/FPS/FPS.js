import CardDetail from '../../components/CardDetail/CardDetail';
import styles from './FPS.module.scss';

import { Header } from '../../components/Header/Header';

import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const FPS = () => {
  const { pathname } = useLocation();
  const { allItens } = useSelector(state => {
    return {
      allItens: state.allItens.filter(item => item.category === pathname)
    }
  });

  return (
    <>
      <Header titleCategory='First Person Shooters' description='Os jogos FPS são exatamente o que o nome descreve: jogos em que a visão do personagem é em primeira pessoa e a mesma do jogador, para maior imersão.' />
      <section>
        <div className={styles.container}>
          {allItens?.map(item => (
            <CardDetail key={item.id} {...item} />
          ))}
        </div>
      </section>
    </>
  )
}

export default FPS