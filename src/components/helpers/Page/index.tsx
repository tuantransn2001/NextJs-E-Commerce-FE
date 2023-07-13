/* eslint-disable import/extensions */
import React from 'react';
import classNames from 'classnames/bind';
import { WrapperComponentProps } from '@/ts/interfaces/common';
const cx = classNames.bind(require('./style/Page.module.scss'));

interface PageProps extends WrapperComponentProps {
  title?: string;
}

export default function Page({ title, children }: PageProps) {
  return (
    <div className={cx('page-container')}>
      {title && (
        <header className={cx('page-header')}>
          <h1 className={cx('page-title')}>{title}</h1>
        </header>
      )}

      <div className={`${cx('page-body')} grid wide`}>
        <div className="row">
          <div className="c-12 gutter">{children}</div>
        </div>
      </div>
    </div>
  );
}
