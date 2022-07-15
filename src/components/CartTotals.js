import React, { useContext } from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';

import { formatPrice } from '../utils/helpers';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/user_context';

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const { currentUser } = useContext(UserContext);

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            Sub-total: <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            Envio: <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            Total :{' '}
            <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        {!currentUser ? (
          <p className='leyenda'>
            Para continuar tu compra porfavor inicia sesion
            <br />
            o
            <br />
            Crea un usuario en tan solo 1 minuto
          </p>
        ) : null}

        {currentUser ? (
          <Link to='/checkout' className='btn'>
            Hacer checkout
          </Link>
        ) : (
          <Link to='/login' className='btn'>
            Iniciar Sesion
          </Link>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  Wrapper,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  Wrapper {
    margin-top: 2rem;
  }
  h4 {
    margin-top: 2rem;
  }

  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }

  .leyenda {
    text-transform: none;
    text-align: center;
    display: block;
    margin-top: 1rem;
    margin-bottom: 0;
  }
`;

export default CartTotals;
