import React from 'react';
import {
  IoRocketSharp,
  IoEyeSharp,
  IoDiamondSharp,
} from 'react-icons/io5';
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
    text: 'productos',
    url: '/productos',
  },
];

export const services = [
  {
    id: 1,
    icon: <IoRocketSharp />,
    title: 'Misión',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: <IoEyeSharp />,
    title: 'Visión',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: <IoDiamondSharp />,
    title: 'Valores',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
];

export const products_url =
  'https://course-api.com/react-store-products';

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
