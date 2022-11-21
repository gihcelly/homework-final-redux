import styles from './Footer.module.scss';
import brand from '../../assets/brand.png';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className={styles.container}>
        <div>
          <span>Desenvolvido por</span>
          <img src={brand} alt="Brand Icon" width={35} /> 
          <span>-</span>
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