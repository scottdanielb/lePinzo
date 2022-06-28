import React from 'react';
import styled from 'styled-components';


import { PageHero } from '../components';
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm ';

const LogIn = () => {
  

  return (
    <main>
      <PageHero title='Login' />
      <Wrapper className='page  section-center'>
        <SignInForm />
        <SignUpForm />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 5rem;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default LogIn;
