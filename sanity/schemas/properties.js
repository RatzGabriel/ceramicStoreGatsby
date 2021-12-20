import React from 'react';
import { AiFillProfile as icon } from 'react-icons/ai';
export default {
  name: 'eigenschaften',
  title: 'Eigenschaften',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Eigenschaften Name',
      type: 'string',
      description: 'Name der Eigenschaft?',
    },
  ],
};
