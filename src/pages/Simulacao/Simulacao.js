import CardDetail from '../../components/CardDetail/CardDetail';
import styles from './Simulacao.module.scss';

import { Header } from '../../components/Header/Header';

import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Simulacao = () => {
  const { pathname } = useLocation();
  const { allItens } = useSelector(state => {
    return {
      allItens: state.allItens.filter(item => item.category === pathname)
    }
  });

  return (
    <>
      <Header titleCategory='Simulação' description='A principal característica dos jogos de simulação é a de simular atividades da vida real, muitos desses jogos deixam você livre para explorar as principais mecânicas do game sem prender muito à missões ou história.' />
      <section>
        <div className={styles.container}>
          {allItens?.map(item => (
            <div className={styles.effect}>
              <CardDetail key={item.id} {...item} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Simulacao