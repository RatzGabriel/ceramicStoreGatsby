import React from 'react';
import PriceInput from '../components/PriceInput';

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
      inputComponent: PriceInput,
      description: 'Price of the item in cents',
      validation: (Rule) => Rule.min(1000).max(50000),
    },
    {
      name: 'eigenschaften',
      title: 'Eigenschaften',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'eigenschaften' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      eigenschaften0: 'eigenschaften.0.name',
      eigenschaften1: 'eigenschaften.1.name',
      eigenschaften2: 'eigenschaften.2.name',
      eigenschaften3: 'eigenschaften.3.name',
    },
    prepare: ({ title, media, ...eigenschaften }) => {
      const eig = Object.values(eigenschaften).filter(Boolean);
      return {
        title: title,
        media,
        subtitle: eig.join(', '),
      };
    },
  },
};
