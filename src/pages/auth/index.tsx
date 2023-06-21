/* eslint-disable import/extensions */
import HomeTemplate from '@/templates/Home';
import { NextPage } from 'next';
import { useState } from 'react';
import { AUTH_TYPE } from '@/ts/enums/common';
import AuthPageForm from '@/components/Auth/AuthPageForm';
import AuthPageSuccess from '@/components/Auth/AuthPageSuccess';

const AuthPage: NextPage = ({}) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [formType, setFormType] = useState<string>(AUTH_TYPE.LOGIN);
  return (
    <HomeTemplate>
      {!isAuth ? (
        <AuthPageForm
          formType={formType}
          setIsAuth={setIsAuth}
          setFormType={setFormType}
        />
      ) : (
        <AuthPageSuccess formType={formType} />
      )}
    </HomeTemplate>
  );
};

export default AuthPage;
