import React from 'react';
import styled from 'styled-components';
import { BsCircleFill, BsCircleHalf, BsCircle } from 'react-icons/bs';
const Stars = ({ stars }) => {
  return (
    <Wrapper>
      <div className='stars'>
        {/* star */}
        <span>
          {stars >= 1 ? (
            <BsCircleFill />
          ) : stars >= 0.5 ? (
            <BsCircleHalf />
          ) : (
            <BsCircle />
          )}
        </span>
        {/* end of star */}
        {/* star */}
        <span>
          {stars >= 2 ? (
            <BsCircleFill />
          ) : stars >= 1.5 ? (
            <BsCircleHalf />
          ) : (
            <BsCircle />
          )}
        </span>
        {/* end of star */}
        {/* star */}
        <span>
          {stars >= 3 ? (
            <BsCircleFill />
          ) : stars >= 2.5 ? (
            <BsCircleHalf />
          ) : (
            <BsCircle />
          )}
        </span>
        {/* end of star */}
        {/* star */}
        <span>
          {stars >= 4 ? (
            <BsCircleFill />
          ) : stars >= 3.5 ? (
            <BsCircleHalf />
          ) : (
            <BsCircle />
          )}
        </span>
        {/* end of star */}
        {/* star */}
        <span>
          {stars === 5 ? (
            <BsCircleFill />
          ) : stars >= 4.5 ? (
            <BsCircleHalf />
          ) : (
            <BsCircle />
          )}
        </span>
        {/* end of star */}
      </div>
      {/* <p className='reviews'>Dificultad: {reviews}</p> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  .reviews {
    font-weight: bold;
  }

  margin-bottom: 0.5rem;
`;
export default Stars;
