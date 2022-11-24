import styles from './Footer.module.scss';

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className={styles.container}>
        <div>
          <span>Desenvolvido por
            <strong>
              <a href='https://github.com/matxd' rel="noreferrer" target={'_blank'}>Matheus</a> e 
              <a href='https://github.com/gihcelly' rel="noreferrer" target={'_blank'}>Gicelly</a>
            </strong>
          </span>
          <span>&copy;</span>
          <span>2022</span>
        </div>
        <div>
          <FaFacebook size={25} color='white' />
          <FaInstagram size={25} color='white' />
          <FaTwitter size={25} color='white' />
        </div>
      </footer>
    </>
  )
}

export default Footer