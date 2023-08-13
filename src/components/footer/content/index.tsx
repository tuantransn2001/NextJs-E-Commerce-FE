/* eslint-disable import/extensions */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { content } from '@/data/footer';
import classNames from 'classnames/bind';
const cx = classNames.bind(require('./style/Content.module.scss'));

const renderInformationCol = () => {
  return content.information.map((information, index) => {
    return (
      <div className="c-3 gutter" key={index}>
        <div className={cx('information')}>
          <h1 className="primary-title-text-style">{information.title}</h1>
          <ul className={cx('information-col-list')}>
            {information.body.map((col, index) => {
              return (
                <li className={cx('information-col-item')} key={index}>
                  <span className="primary-text-style">{col}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  });
};
const renderContactCol = () => {
  return content.contacts.map((contact, index) => {
    return (
      <div className="c-3 gutter" key={index}>
        <div className={cx('contact')}>
          <h1 className="primary-title-text-style">{contact.title}</h1>
          <ul className={cx('contact-col-list')}>
            {contact.body.map((col, index) => {
              return (
                <li className={cx('contact-col-item')} key={index}>
                  <div className={cx('contact-col-item-icon-wrapper')}>
                    <FontAwesomeIcon icon={faClock} />
                  </div>

                  <span className="primary-text-style">{col}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  });
};
export default function Content({}) {
  return (
    <div className={`${cx('wrapper')}`}>
      <div className="grid wide">
        <div className="row">
          {renderInformationCol()}
          {renderContactCol()}
        </div>
      </div>
    </div>
  );
}
