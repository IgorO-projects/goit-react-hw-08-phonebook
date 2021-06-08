import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';


const Navigation = () => (
  <nav>
    <NavLink 
      to="/" 
      exact 
      className={styles.link} 
      activeClassName={styles.activeLink}
    >
      Главная
    </NavLink>

    <NavLink
      to="/todos"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Заметки
    </NavLink>
  </nav>
);

export default Navigation;