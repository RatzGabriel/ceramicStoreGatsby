import React from 'react';

import { GiTeapotLeaves as icon } from 'react-icons/gi';
export default {
  name: 'ceramic',
  title: 'Ceramic',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Ceramic Name',
      type: 'string',
      description: 'Name of the ceramic item',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image ',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the item in cents',
      validation: (Rule) => Rule.min(1000).max(50000),
    },
  ],
};
