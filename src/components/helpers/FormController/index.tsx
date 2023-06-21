/* eslint-disable import/extensions */
import { BUTTON_ACTION_TYPE, BUTTON_TYPE } from '@/ts/enums/common';
import { Field, IFormInput } from '@/ts/types/common';
import { UseFormRegister } from 'react-hook-form';
import { capitalize } from '@/common';
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
  return data.map(({ label, type, fieldName, placeholder }, index) => {
    return (
      <div key={`${fieldName}${index}`} className={cx('input-tag-wrapper')}>
        <label className={cx('label-tag')} htmlFor={`${fieldName}${index}`}>
          {label}
        </label>
        <input
          id={`${fieldName}${index}`}
          placeholder={placeholder}
          type={type}
          className={cx('input-tag')}
          {...register(fieldName as keyof IFormInput)}
        />
      </div>
    );
  });
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
      <MyButton
        style={{ marginTop: '16px' }}
        maxWidth
        type={BUTTON_TYPE.primary}
        actionType={BUTTON_ACTION_TYPE.submit}
        isLoading={isLoading}
      >
        {capitalize(submitAction)}
      </MyButton>
    </form>
  );
}
