import CardDetail from '../../components/CardDetail/CardDetail';
import styles from './Sobrevivencia.module.scss';

import { useEffect } from 'react';

import { Header } from '../../components/Header/Header';

import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sobrevivencia = () => {
  const { pathname } = useLocation();
  const { allItens } = useSelector(state => {
    const regexp = new RegExp(state.search, 'i');
    return {
      category: state.categories.find(category  => category.id === pathname),
      allItens: state.allItens.filter(item => item.category === pathname && item.titleCard.match(regexp))
    }
  });

	useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header titleCategory='Sobrevivência' description='Jogo de sobrevivência é um subgênero de jogos eletrônicos de ação que geralmente libera o jogador com os mínimos recursos possíveis em um mapa de mundo aberto hostil.' />
      <section>
        <div className={styles.container}>
          {allItens?.map(item => (
            <div key={item.id} className={styles.effect}>
              <CardDetail key={item.id} {...item} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Sobrevivencia