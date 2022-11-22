import CardDetail from '../../components/CardDetail/CardDetail';
import styles from './Moba.module.scss';

import { Header } from '../../components/Header/Header';

import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Moba = () => {
  const { pathname } = useLocation();
  const { allItens } = useSelector(state => {
    return {
      allItens: state.allItens.filter(item => item.category === pathname)
    }
  });

  return (
    <>
      <Header titleCategory='MOBA' description='Um MOBA conta com dois times com cinco jogadores cada que se digladiam em um mapa simétrico até um dos lados conseguir destruir a base da equipe oponente.' />
      <section>
        <div className={styles.container}>
          {allItens?.map((item) => (
            <CardDetail key={item.id} {...item} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Moba