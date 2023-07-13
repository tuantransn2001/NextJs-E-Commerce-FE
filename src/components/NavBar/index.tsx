'use client';
/* eslint-disable import/extensions */
import { useGet } from '@/customizes/hooks';
import { API_PATH } from '@/ts/enums/api_enums';
import LoadingScreen from '../helpers/LoadingScreen';
import classNames from 'classnames/bind';
import { CategoryDTO } from '@/ts/dto/common.dto';
import MyButton from '../helpers/MyButton';
import { BUTTON_TYPE } from '@/ts/enums/common';
import { useAppDispatch } from '@/redux/store';
import { addCategories } from '@/redux/slice/app.slice';
import { isEmpty } from '@/common';
import { useRouter } from 'next/router';
const cx = classNames.bind(require('./style/NavBar.module.scss'));

export default function NavBar({}) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    data: categories,
    error,
    isLoading,
  } = useGet(API_PATH.getAllCategory, { page_number: 1, page_size: 5 });

  const isNotOK: boolean =
    isLoading || !isEmpty(error) || isEmpty(categories?.data);

  if (isNotOK) {
    return <LoadingScreen />;
  } else {
    dispatch(dispatch(addCategories({ data: categories?.data })));
    return (
      <div className={cx('nav-bg')}>
        <div className={cx('main-navigation')}>
          <ul className={cx('nav-list')}>
            {categories?.data.map(({ id, title }: CategoryDTO) => {
              return (
                <li className={cx('nav-item')} key={id}>
                  <MyButton
                    onClick={() => {
                      router.push({
                        pathname: `/category/${id}`,
                      });
                    }}
                    className={cx('nav-content')}
                    transparent
                    type={BUTTON_TYPE.primary}
                  >
                    {title}
                  </MyButton>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
