import React from 'react';
import styled from 'styled-components';
import { services } from '../utils/constants';

const Services = () => {
  return (
    <Wrapper>
      <div className=' section-center'>
        <article className='header'>
          <h3>
            Le Pinzó <br />
            Arte. Experiencias. Disfrute.
          </h3>
          <p>
            En tan solo 3 sencillos pasos convierte una obra de arte.
            Sabemos que te gusta ensuciarte, pero no tanto. Por eso
            sigue estos sencillos pasos y tendras tu momento Picasso.
          </p>
        </article>
        <div className='services-center'>
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article key={id} className='service'>
                <span className='icon'> {icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--clr-primary-1);
  }
  padding: 5rem 0;
  /* --clr-primary-7   10*/
  background: var(--clr-primary-10);

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
    font-size: 1.2rem;
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-primary-7);
    /* --clr-primary-10 7*/
    text-align: center;
    padding: 3.5rem 2.5rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
    }
  }
  span {
    width: 11rem;
    height: 9rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 2.5rem;
    /* margin-top: -1.75rem; */
    border-radius: 10px;
    padding-left: 20px;
    padding-right: 20px;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      /* font-size: 2rem; */
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;
export default Services;
