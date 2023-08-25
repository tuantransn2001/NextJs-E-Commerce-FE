import React from 'react';
import classNames from 'classnames/bind';
const cx = classNames.bind(require('./style/Contact.module.scss'));
export default function Contact({}) {
  return (
    <div className={cx('infor-contact-wrapper')}>
      <div className={cx('infor-contact-content')}>
        <h3 className="h3-size-default">OUR EXPERTS ARE HERE TO HELP</h3>
        <p className="paragraph-text-style-strong">
          Whether you’re looking for vivid, evocative glamour that is built to
          last or romantic styling and classic themes with subtle modern
          practicalities, our consultants here to help.
        </p>
        <p className="paragraph-text-style">
          Our experts will help to manage your project, find the products you
          need and bring your unique vision to life.
        </p>
      </div>
    </div>
  );
}
