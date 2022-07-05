import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import heroBcg from '../assets/hero-inicio-1.jpeg';
import heroBcg2 from '../assets/hero-inicio-2.jpeg';

const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>
          Get artsy <br />
          but not so messy
        </h1>
        <p>
          Proveemos todos los materiales necesarios para que puedas
          tener tu momento <span>Picasso</span>. Lo eres y nosotros te
          damos el primer empujon.
        </p>
        <Link to='/productos' className='btn hero-btn'>
          Ver colecciones
        </Link>
      </article>
      <article className='img-container'>
        <img
          src={heroBcg}
          alt='paint by number'
          className='accent-img'
        />
        <img
          src={heroBcg2}
          alt='person painting'
          className='main-img'
        />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }

  span {
    font-weight: bold;
    font-style: italic;
  }

  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      margin-top: 1rem;
    }

    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 300px;
      transform: translateX(-50%);
      border-radius: var(--radius);
      z-index: 1;
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      /* background: var(--clr-primary-9); */
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
