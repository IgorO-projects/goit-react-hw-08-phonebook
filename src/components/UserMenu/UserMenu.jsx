import { connect } from 'react-redux';
import defaultAvatar from './avatar.png'
import styles from './UserMenu.module.css';
import { getUsername } from '../../redux/auth/auth-selectors';

  
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

const mapStateToProps = state => ({
  name: getUsername(state),
  avatar: defaultAvatar,
})

export default connect(mapStateToProps)(UserMenu);