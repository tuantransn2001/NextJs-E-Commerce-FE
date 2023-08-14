/* eslint-disable import/extensions */
import { ObjectType } from '@/ts/types/common';

export const authSuccessStatusContent: ObjectType = {
  register: {
    title: 'Congratulate! Now you are a member of lenleys family.',
    content: 'The Lenleys team will be in touch soon.',
    directionBtnContent: [`Log in`, `Back to home`],
  },
  login: {
    title: 'Hi! Welcome back.',
    content: 'Hope you have happy time shopping in lenleys.',
    directionBtnContent: [`Continue shopping`, `Back to home`],
  },
};

export const authFormData: ObjectType = {
  login: {
    h4: 'Welcome Back 👏',
    h5: 'Access to all features. No credit card required.',
    data: [
      {
        label: 'Enter email',
        fieldName: 'email',
        placeholder: 'username@gmail.com',
        type: 'text',
      },
      {
        label: 'Enter password',
        fieldName: 'password',
        placeholder: '@123456@',
        type: 'password',
      },
    ],
    extensionContent: [`Didn't have account before?`, 'Sign up'],
  },
  register: {
    h4: 'Start for free Today 👏',
    h5: 'Have we meet before?',
    data: [
      {
        label: 'Enter firstName',
        fieldName: 'firstName',
        placeholder: 'John',
        type: 'text',
      },
      {
        label: 'Enter lastName',
        fieldName: 'lastName',
        placeholder: 'Snow',
        type: 'text',
      },
      {
        label: 'Enter email',
        fieldName: 'email',
        placeholder: 'username@gmail.com',
        type: 'text',
      },
      {
        label: 'Enter password',
        fieldName: 'password',
        placeholder: '@123456@',
        type: 'password',
      },
      {
        label: 'Enter phone number',
        fieldName: 'phoneNumber',
        placeholder: '0123456789',
        type: 'text',
      },
      {
        label: 'Enter address',
        fieldName: 'address',
        placeholder: 'Số 1 đường 12,Quận Thủ Đức,Tp.HCM ',
        type: 'text',
      },
    ],
    extensionContent: [`Did you have an account?`, 'Sign in'],
  },
};
