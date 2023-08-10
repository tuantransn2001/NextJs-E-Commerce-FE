/* eslint-disable import/extensions */
import { useState } from 'react';
import { AUTH_TYPE } from '@/ts/enums/common';
import AuthPageForm from '@/components/Auth/AuthPageForm';
import AuthPageSuccess from '@/components/Auth/AuthPageSuccess';
import { useSelector } from 'react-redux';
import { isAuthSelector } from '@/redux/slice/auth.slice';

const Auth = ({}) => {
  const isAuth = useSelector(isAuthSelector);
  const [formType, setFormType] = useState<string>(AUTH_TYPE.LOGIN);
  return !isAuth ? (
    <AuthPageForm formType={formType} setFormType={setFormType} />
  ) : (
    <AuthPageSuccess formType={formType} />
  );
};

export default Auth;
