import { Component } from 'react';
import styles from './RegisterView.module.css';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  }


  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ name: '', email: '', password: '' });
    // dispatch(authOperations.register({ name, email, password }));
    // setName('');
    // setEmail('');
    // setPassword('');
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <h1>Страница регистрации</h1>
  
        <form onSubmit={this.handleSubmit} className={styles.form} autoComplete="off">
          <label className={styles.label}>
            Имя
            <input type="text" name="name" value={name} onChange={this.handleChange} />
          </label>
  
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
  
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    );
  }
}

export default RegisterView;