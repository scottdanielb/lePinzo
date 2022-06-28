import { useState } from 'react';
import styled from 'styled-components';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../utils/firebase';
import FormInput from './FormInput';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      resetFormField();
    } catch (error) {
      if (
        error.code === 'auth/wrong-password' ||
        'auth/user-not-found'
      ) {
        alert('contraseña o correo incorrecto');
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <TitleContainer>Inicia sesion</TitleContainer>
      <span>Disfruta de tu momento Picasso</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          name='email'
          value={email}
          required
          onChange={handleChange}
        />

        <FormInput
          label='Contraseña'
          type='password'
          name='password'
          value={password}
          required
          onChange={handleChange}
        />
        <div className='buttons-container'>
          <button className='btn btn-sign-up' type='submit'>
            Iniciar Sesión
          </button>
          <button
            type='button'
            className='btn btn-sign-up btn-google'
            onClick={signInWithGoogle}
          >
            Iniciar Sesión con Google
          </button>
        </div>
      </form>
    </SignUpContainer>
  );
};

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380;

  .buttons-container {
    display: flex;
    justify-content: space-between;
  }

  .btn-sign-up {
    margin-bottom: 30px;
    margin-top: 10px;
    padding-top: 10px;
    margin-left: 25px;
    margin-right: 25px;
    padding-bottom: 10px;
  }

  .btn-google {
    background-color: white;
    color: rgb(66, 133, 244);

    :hover {
      background-color: rgb(66, 133, 244);
      color: white;
    }
  }
`;

const TitleContainer = styled.h4`
  margin: 1rem 0;
  margin-bottom: 5px;
`;

export default SignInForm;
