import { useState } from 'react';
import styled from 'styled-components';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../utils/firebase';
import FormInput from './FormInput';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } =
    formFields;
  // const history = useHistory();
  const navigate = useNavigate();

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      navigate('/', { update: true });
      await createUserDocumentFromAuth(user, { displayName });
      resetFormField();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else console.log('user creation error', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <TitleContainer>No tengo una cuenta</TitleContainer>
      <span>Crea tu cuenta con tu correo y contraseña</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Nombre'
          type='text'
          name='displayName'
          value={displayName}
          required
          onChange={handleChange}
        />

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

        <FormInput
          label='Confirmar Contraseña'
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          required
          onChange={handleChange}
        />
        <button className='btn btn-sign-up' type='submit'>
          Crear cuenta
        </button>
      </form>
    </SignUpContainer>
  );
};

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380;

  .btn-sign-up {
    margin-bottom: 30px;
    margin-top: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

const TitleContainer = styled.h4`
  margin: 1rem 0;
  margin-bottom: 5px;
`;

export default SignUpForm;
