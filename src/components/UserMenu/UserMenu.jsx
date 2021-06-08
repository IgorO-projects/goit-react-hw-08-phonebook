import styles from './UserMenu.module.css';
import defaultAvatar from './avatar.png'
  
const UserMenu = ({ avatar, name, OnLogout }) => {

  
    return (
      <div className={styles.container}>
        <img src={avatar} alt="" width="32" className={styles.avatar} />
        <span className={styles.name}>Добро пожаловать, {name}</span>
        <button type="button" onClick={OnLogout}>
          Выйти
        </button>
      </div>
    );
}

export default UserMenu;