import { FaFlag, FaGlobe, FaMap } from 'react-icons/fa6';
import styles from './Menu.module.css';
import { FaSignInAlt } from 'react-icons/fa';

export const Menu = () => {
    return(
        <div className={styles.menu}>
            <div className={styles.menuItem}><FaGlobe className='icons'/>Continents</div>
            <div className={styles.menuItem}><FaFlag className='icons'/>Countries</div>
            <div className={styles.menuItem}><FaMap className='icons'/>Map</div>
            <div className={styles.menuItem}><FaSignInAlt className='icons'/>Login</div>
        </div>
    )
}