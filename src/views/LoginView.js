import { Component } from 'react';
import { connect } from 'react-redux';
import styles from './LoginView.module.css';
import { logIn } from '../redux/auth/auth-operations';


class LoginView extends Component {
  state = {
    email: '',
    password: '',
  }
  
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
    // switch (name) {
    //   case 'email':
    //     return setEmail(value);
    //   case 'password':
    //     return setPassword(value);
    //   default:
    //     return;
    // }
  }
  
  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);
    this.setState({ name: '', email: '', password: '' });
    // dispatch(authOperations.logIn({ email, password }));
    // setEmail('');
    // setPassword('');
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Страница логина</h1>
  
        <form onSubmit={this.handleSubmit} className={styles.form} autoComplete="off">
          <label className={styles.label}>
            Почта
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
  
          <label className={styles.label}>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
  
          <button type="submit">Войти</button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = {
  onLogin: logIn
}

export default connect(null, mapDispatchToProps)(LoginView);

