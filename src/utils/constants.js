import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Service1White } from '../assets/services-1-white-1.svg';
import { ReactComponent as Service1 } from '../assets/services-1.svg';
import { ReactComponent as Service2 } from '../assets/services-2.svg';
import { ReactComponent as Service2White } from '../assets/services-2-white.svg';
import { ReactComponent as Service3 } from '../assets/services-3.svg';

export const links = [
  {
    id: 1,
    text: 'Inicio',
    url: '/',
  },
  {
    id: 2,
    text: 'Nosotros',
    url: '/nosotros',
  },
  {
    id: 3,
    text: 'Colecciones',
    url: '/productos',
  },
];

export const services = [
  {
    id: 1,
    icon: <Service2 />,
    title: 'Paso 1',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. ',
  },
  {
    id: 2,
    icon: <Service1 />,
    title: 'Paso 2',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. ',
  },
  {
    id: 3,
    icon: <Service3 />,
    title: 'Paso 3',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. ',
  },
];

export const products_url =
  'https://course-api.com/react-store-products';

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
