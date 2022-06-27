import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-about.jpeg';

const AboutPage = () => {
  return (
    <main>
      <PageHero title='Nosotros' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='about' />
        <article>
          <div className='title'>
            <h2>Nuestra historia</h2>
            <div className='underline'></div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Harum laborum eveniet nihil consequuntur mollitia
              tempora impedit dolores recusandae beatae id? Officia
              porro repellat ab esse aliquam qui dolorem, quidem et.
              Lorem ipsum dolor sit amet consectetur, adipisicing
              elit.
            </p>
            <p>
              Suscipit eos a rem molestiae fugiat magnam illo esse
              tenetur quod ipsa veniam perferendis repellat
              repellendus, ipsum eveniet temporibus, facere, quibusdam
              soluta. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Ipsa quas laboriosam distinctio ut
              excepturi.
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 5rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 345px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
