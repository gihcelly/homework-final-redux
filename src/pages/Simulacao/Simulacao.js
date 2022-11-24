import CardDetail from '../../components/CardDetail/CardDetail';
import styles from './Simulacao.module.scss';

import { useEffect } from 'react';

import { Header } from '../../components/Header/Header';

import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Simulacao = () => {
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
      <Header titleCategory='Simulação' description='A principal característica dos jogos de simulação é a de simular atividades da vida real, muitos desses jogos deixam você livre para explorar as principais mecânicas do game sem prender muito à missões ou história.' />
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

export default Simulacao