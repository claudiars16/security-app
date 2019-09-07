import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-up.styles.scss';
const SignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
          })
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(ROUTES.HOME);
          })
          .catch(error => {
            this.setState({ error });
          });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <div className='sign-up'>
         <h2 className='title'>No tengo una cuenta</h2>
         <span>Registrate con tu email y constrasenia</span>
         <form className='sign-up-form' onSubmit={this.onSubmit}>
        <FormInput
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Nombres Completos"
        />
        <FormInput
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email"
        />
        <FormInput
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <FormInput
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <CustomButton disabled={isInvalid} type="submit">
          Registrarse
        </CustomButton>

        {error && <p>{error.message}</p>}
      </form>
      </div>
     
    );
  }
}

const SignUpLink = () => (
  <p>
   No tienes una cuenta? <Link to={ROUTES.SIGN_UP}>REGISTRARSE</Link>
  </p>
);
const SignUpForm = withRouter(withFirebase(SignUpFormBase));
export default SignUpPage;
export { SignUpForm, SignUpLink };