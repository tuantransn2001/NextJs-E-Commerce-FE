/* eslint-disable import/extensions */
import { WrapperComponentProps } from '@/ts/interfaces/common';
import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import classNames from 'classnames/bind';
import { BUTTON_ACTION_TYPE, BUTTON_TYPE } from '@/ts/enums/common';
import { ObjectType } from '@/ts/types/common';
const cx = classNames.bind(require('./style/Button.module.scss'));

interface ButtonProps extends WrapperComponentProps {
  type: keyof typeof BUTTON_TYPE;
  actionType?: 'button' | 'reset' | 'submit' | undefined;
  transparent?: boolean;
  maxWidth?: boolean;
  href?: string | undefined;
  onClick?: (...argument: any[]) => any;
  isLoading?: boolean;
  style?: ObjectType;
  className?: string;
  size?: string;
  [key: string]: any;
}

export default function MyButton({
  href,
  children,
  transparent,
  maxWidth,
  actionType,
  onClick,
  isLoading,
  style,
  size,
  className: _className,
  ...rest
}: ButtonProps) {
  const className = cx(
    'btn',
    {
      isTransparent: transparent,
      maxWidth,
    },
    _className,
    size,
  );

  if (href) {
    return (
      <Link
        {...rest}
        href={href}
        style={style}
        onClick={onClick}
        type={actionType ? actionType : BUTTON_ACTION_TYPE.button}
        className={className}
      >
        {children}
      </Link>
    );
  }

  return (
    <Button
      {...rest}
      style={style}
      onClick={onClick}
      type={actionType ? actionType : BUTTON_ACTION_TYPE.button}
      className={className}
      isLoading={isLoading}
      disabled={isLoading}
    >
      {children}
    </Button>
  );
}
