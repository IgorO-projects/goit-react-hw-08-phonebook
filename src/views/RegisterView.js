import { Component } from 'react';
import { connect } from 'react-redux';
import styles from './RegisterView.module.css';
import { register } from '../redux/auth/auth-operations';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

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

    this.props.onRegister(this.state)
    this.setState({ name: '', email: '', password: '' });
    // dispatch(authOperations.register({ name, email, password }));
    // setName('');
    // setEmail('');
    // setPassword('');
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div className={styles.container}>
        <h1>Registration page</h1>
  
        <form onSubmit={this.handleSubmit} className={styles.form} autoComplete="off">
          <label className={styles.label}>
            Name
            <input type="text" name="name" value={name} onChange={this.handleChange} />
          </label>
  
          <label className={styles.label}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
  
          <label className={styles.label}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <Button variant="outline-danger" type="submit">Register now</Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: register,
}
export default connect(null, mapDispatchToProps)(RegisterView);