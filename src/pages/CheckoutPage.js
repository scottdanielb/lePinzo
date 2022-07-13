import React from 'react';
import styled from 'styled-components';
import { PageHero, StripeCheckout } from '../components';
import StripeCheckout2 from '../components/StripeCheckout2';
// extra imports
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
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
      <PageHero title='Checkout' />
      <Wrapper className='page'>
        <StripeCheckout />
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 3rem;
      text-transform: none;
    }
  }
`;
export default CheckoutPage;
