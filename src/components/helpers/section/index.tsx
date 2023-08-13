/* eslint-disable import/extensions */
import React from 'react';
import classNames from 'classnames/bind';
import { WrapperComponentProps } from '@/ts/interfaces/common';
import { ObjectType } from '@/ts/types/common';
const cx = classNames.bind(require('./style/Section.module.scss'));

interface SectionProps extends WrapperComponentProps {
  title?: string;
  borderOptions?: ObjectType;
}

export default function Section({
  title,
  children,
  borderOptions,
}: SectionProps) {
  const containerClassName = cx(
    'section-container',
    borderOptions && {
      [`border-${borderOptions.direction}`]:
        borderOptions.direction !== false ? true : false,
    },
  );
  const renderTitle = () => {
    return (
      title && (
        <div className="row">
          <div className="c-12 gutter flex-center">
            <h1 className={cx('section-title')}>{title}</h1>
          </div>
        </div>
      )
    );
  };

  return (
    <section className={containerClassName}>
      <div className={`${cx('section-content-wrapper')} grid wide`}>
        {renderTitle()}
        <div className="row">
          <div className="c-12 gutter">{children}</div>
        </div>
      </div>
    </section>
  );
}
