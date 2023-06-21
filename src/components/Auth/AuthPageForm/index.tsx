/* eslint-disable import/extensions */
import FormController from '@/components/helpers/FormController';
import MyButton from '@/components/helpers/MyButton';
import { useTitle } from '@/customizes/hooks';
import { authFormData } from '@/data/auth';
import { AUTH_TYPE, BUTTON_TYPE } from '@/ts/enums/common';
import API from '@/services/API';
import { IFormInput, Response } from '@/ts/types/common';
import { RESPONSE_STATUS } from '@/ts/enums/api_enums';
import { useState } from 'react';
import { Dispatch } from 'react';
import { SetStateAction } from 'react';
import HttpException from '@/ts/utils/http.exception';
import {
  checkMissPropertyInObjectBaseOnValueCondition,
  isEmpty,
} from '@/common';
import classNames from 'classnames/bind';
const cx = classNames.bind(require('./style/AuthPageForm.module.scss'));

interface AuthFormProps {
  formType: string;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
  setFormType: Dispatch<SetStateAction<string>>;
}

const handleOnSubmit = async (
  formType: string,
  authData: IFormInput,
  setErr: Dispatch<SetStateAction<string>>,
  setIsAuth: Dispatch<SetStateAction<boolean>>,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
) => {
  setIsLoading(true);
  const missFieldData = checkMissPropertyInObjectBaseOnValueCondition(
    authData,
    ['', undefined],
  );

  if (isEmpty(missFieldData)) {
    const result: Response =
      formType === AUTH_TYPE.LOGIN
        ? await API.login(authData)
        : await API.register(authData);

    const { status, error } = result;

    if (status === RESPONSE_STATUS.SUCCESS) {
      // ? Navigate
      setIsAuth(true);
    }
    if (status === RESPONSE_STATUS.FAIL) {
      // ! Log error
      const { message } = error as HttpException;
      setErr(message);
    }
  } else {
    setErr(`${missFieldData.join(',')} is required! Please fill it all`);
  }
  setIsLoading(false);
};

const switchForm = (
  formType: AuthFormProps['formType'],
  setFormType: AuthFormProps['setFormType'],
  setErr: Dispatch<SetStateAction<string>>,
) => {
  setFormType(
    formType === AUTH_TYPE.LOGIN ? AUTH_TYPE.REGISTER : AUTH_TYPE.LOGIN,
  );
  setErr('');
};

export default function AuthPageForm({
  formType,
  setIsAuth,
  setFormType,
}: AuthFormProps) {
  const [err, setErr] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useTitle('My Account - Lenleys');

  return (
    <div className={cx('auth-page-form-container')}>
      <div className={`${cx('auth-page-form')} grid`}>
        <div className="row">
          <div className="c-12 gutter">
            <header className={cx('auth-page-form-header')}>
              <h4 className={cx('auth-page-form-title')}>
                {authFormData[formType].h4}
              </h4>
              <h5 className={cx('auth-page-form-subtitle')}>
                {authFormData[formType].h5}
              </h5>
            </header>
          </div>
        </div>
        {err && (
          <div className="row">
            <div className="c-12 gutter">
              <div className={cx('error-warning', { isError: err !== '' })}>
                {err}
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <div className="c-12 gutter">
            <FormController
              data={authFormData[formType].data}
              isLoading={isLoading}
              onSubmit={async (authData) =>
                await handleOnSubmit(
                  formType,
                  authData,
                  setErr,
                  setIsAuth,
                  setIsLoading,
                )
              }
              submitAction={formType}
            />
          </div>
        </div>
        <div className="row">
          <div className="c-12 gutter">
            <div className={cx('remember-password-block-wrapper')}>
              <input
                type="checkbox"
                id="remmember-password-checkbox"
                className={cx('remmember-password-checkbox')}
              />
              <label
                htmlFor="remmember-password-checkbox"
                className={cx('remmember-password-label')}
              >
                Remember password
              </label>
            </div>
            <div className={cx('sign-up-btn-content-wrapper')}>
              {authFormData[formType].extensionContent[0]}
              <MyButton
                onClick={() => switchForm(formType, setFormType, setErr)}
                type={BUTTON_TYPE.primary}
                transparent
              >
                {authFormData[formType].extensionContent[1]}
              </MyButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
