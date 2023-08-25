import React from 'react';
import classNames from 'classnames/bind';
const cx = classNames.bind(require('./style/LoadingScreen.module.scss'));

export default function LoadingScreen({}) {
  return <div className={`${cx('loading-page-wrapper')}`}></div>;
}
