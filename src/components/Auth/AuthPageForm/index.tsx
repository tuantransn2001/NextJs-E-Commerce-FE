/* eslint-disable import/extensions */
import FormController from '@/components/helpers/formController';
import MyButton from '@/components/helpers/myButton';
import { useLocalStorage, useTitle } from '@/customizes/hooks';
import { authFormData } from '@/data/auth';
import { AUTH_TYPE, BUTTON_TYPE } from '@/ts/enums/common';
import AuthService from '@/services/auth.service';
import { IFormInput, ResponseAttributes } from '@/ts/types/common';
import { RESPONSE_STATUS } from '@/ts/enums/api_enums';
import { useState, Dispatch, SetStateAction } from 'react';
import HttpException from '@/ts/utils/http.exception';
import {
  checkMissPropertyInObjectBaseOnValueCondition,
  isEmpty,
} from '@/common';
import classNames from 'classnames/bind';
const cx = classNames.bind(require('./style/AuthPageForm.module.scss'));

interface AuthFormProps {
  formType: string;
  setFormType: Dispatch<SetStateAction<string>>;
}

const handleOnSubmit = async (
  formType: string,
  authData: IFormInput,
  setErr: Dispatch<SetStateAction<string>>,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setAccessToken: Dispatch<SetStateAction<string>>,
) => {
  setIsLoading(true);
  const missFieldData = checkMissPropertyInObjectBaseOnValueCondition(
    authData,
    ['', undefined],
  );

  if (isEmpty(missFieldData)) {
    const { status, data, error }: ResponseAttributes =
      formType === AUTH_TYPE.LOGIN
        ? await AuthService.login(authData)
        : ((await AuthService.register(authData)) as ResponseAttributes);

    if (status === RESPONSE_STATUS.SUCCESS) {
      // ? Navigate
      setAccessToken(data.access_token);
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

export default function AuthPageForm({ formType, setFormType }: AuthFormProps) {
  const setAccessToken = useLocalStorage('access_token', '')[1];
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
                  setIsLoading,
                  setAccessToken,
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
