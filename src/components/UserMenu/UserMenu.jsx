import { connect } from 'react-redux';
import defaultAvatar from './avatar.png'
import styles from './UserMenu.module.css';
import { getUseremail } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

  
const UserMenu = ({ avatar, email, OnLogout }) => {

    return (
      <div className={styles.container}>
        <img src={avatar} alt="" width="32" className={styles.avatar} />
        <span className={styles.name}>Hello there, {email}</span>
        <Button variant="danger" type="button" onClick={OnLogout}>
          Quit..
        </Button>
      </div>
    );
}

const mapStateToProps = state => ({
  email: getUseremail(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  OnLogout: logOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);