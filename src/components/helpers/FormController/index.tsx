/* eslint-disable import/extensions */
import { BUTTON_ACTION_TYPE, BUTTON_TYPE } from '@/ts/enums/common';
import { Field, IFormInput } from '@/ts/types/common';
import { UseFormRegister } from 'react-hook-form';
import { capitalizeChar } from '@/common';
import { useForm, SubmitHandler } from 'react-hook-form';
import MyButton from '../MyButton';
import classNames from 'classnames/bind';
const cx = classNames.bind(require('./style/FormController.module.scss'));
interface FormControllerProps {
  data: Field[];
  onSubmit: SubmitHandler<IFormInput>;
  submitAction: string;
  isLoading?: boolean;
}

const renderInputTag = (
  data: Field[],
  register: UseFormRegister<IFormInput>,
) => {
  const renderInputBaseOnType = (payload: Partial<Field>) => {
    if (payload.type === 'textarea') {
      return (
        <textarea
          id={`${payload.fieldName}`}
          placeholder={payload.placeholder}
          className={
            payload.classNames?.input
              ? payload.classNames.input
              : cx('input-tag')
          }
          rows={3}
          {...register(payload.fieldName as keyof IFormInput)}
        />
      );
    } else if (payload.type === 'select') {
      return (
        <select
          {...register(payload.fieldName as keyof IFormInput)}
          className={
            payload.classNames?.input
              ? payload.classNames.input
              : cx('input-tag')
          }
        >
          {payload.options?.map(({ value, children }) => {
            return (
              <option key={value} value={value}>
                {children}
              </option>
            );
          })}
        </select>
      );
    } else {
      return (
        <input
          id={`${payload.fieldName}`}
          placeholder={payload.placeholder}
          type={payload.type}
          className={
            payload.classNames?.input
              ? payload.classNames.input
              : cx('input-tag')
          }
          {...register(payload.fieldName as keyof IFormInput)}
        />
      );
    }
  };

  return (
    <div className="row">
      {data.map(
        (
          { label, type, fieldName, placeholder, classNames, column, options },
          index,
        ) => {
          return (
            <div
              className={`c-${column ? column : 12} gutter`}
              key={`${fieldName}${index}`}
            >
              <div className={cx('input-tag-wrapper')}>
                <label
                  className={
                    classNames?.label ? classNames?.label : cx('label-tag')
                  }
                  htmlFor={`${fieldName}${index}`}
                >
                  {label}
                </label>
                {renderInputBaseOnType({
                  type,
                  placeholder,
                  classNames,
                  fieldName,
                  options,
                })}
              </div>
            </div>
          );
        },
      )}
    </div>
  );
};

export default function FormController({
  data,
  onSubmit,
  submitAction,
  isLoading,
}: FormControllerProps) {
  const { register, handleSubmit } = useForm<IFormInput>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {renderInputTag(data, register)}

      <div className="row">
        <div className="c-12 gutter">
          <MyButton
            style={{ marginTop: '16px' }}
            maxWidth
            size="large"
            type={BUTTON_TYPE.primary}
            actionType={BUTTON_ACTION_TYPE.submit}
            isLoading={isLoading}
          >
            {capitalizeChar(submitAction)}
          </MyButton>
        </div>
      </div>
    </form>
  );
}
