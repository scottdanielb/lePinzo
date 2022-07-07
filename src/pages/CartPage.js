import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import { CartContent, PageHero } from '../components';

const CartPage = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <Wrapper className='page-100'>
        <div className='empty'>
          <h2>Tu carrito esta vacio</h2>
          <Link to='/productos' className='btn'>
            Ten tu momento Picasso
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      <PageHero title='Cart' />
      <Wrapper className='page'>
        <CartContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 3rem;
      text-transform: none;
    }
  }
`;

export default CartPage;
