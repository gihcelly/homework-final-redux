import CardDetail from '../../components/CardDetail/CardDetail';
import styles from './RPG.module.scss';

import { Header } from '../../components/Header/Header';

import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RPG = () => {
  const { pathname } = useLocation();
  const { allItens } = useSelector(state => {
    return {
      allItens: state.allItens.filter(item => item.category === pathname)
    }
  });

  return (
    <>
      <Header titleCategory='Role Playing Game' description='Role-playing game, também conhecido como RPG, é um tipo de jogo em que os jogadores assumem papéis de personagens e criam narrativas colaborativamente.' />
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

export default RPG