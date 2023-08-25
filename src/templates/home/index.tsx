/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/extensions */
import { WrapperComponentProps } from '@/ts/interfaces/common';
import Header from '@/components/header';
import Footer from '@/components/footer';
import NavBar from '@/components/navBar';
import { useState, useEffect, useCallback } from 'react';
import { useLocalStorage } from '@/customizes/hooks';
import AuthService from '@/services/auth.service';
import { ResponseAttributes } from '@/ts/types/common';
import { setCurrentUser, setIsAuth } from '@/redux/slice/auth.slice';
import { useDispatch } from 'react-redux';
import { RESPONSE_STATUS } from '@/ts/enums/api_enums';
import CartService from '@/services/cart.service';
import { setCart } from '@/redux/slice/cart.slice';
<<<<<<< HEAD

export default function HomeTemplate({ children }: WrapperComponentProps) {
  const dispatch = useDispatch();
  const [token, setToken] = useLocalStorage('access_token', '');
  const [isClient, setIsClient] = useState(false);

=======
import Messages from '@/components/messages';

const useGetMe = () => {
  const dispatch = useDispatch();
  const [token, setToken] = useLocalStorage('access_token', '');
>>>>>>> 0595a16089032e3ab77fef9886a1613486f99bba
  const handleGetMe = useCallback(async () => {
    if (token) {
      await AuthService.me({
        access_token: token,
      })
        .then((res) => {
          const getMeResult = res as ResponseAttributes;
          if (getMeResult.status === RESPONSE_STATUS.SUCCESS) {
            (async () => {
              await CartService.getUserCart(getMeResult.data.data.id).then(
                (res) => {
                  const getUserCartResult = res as ResponseAttributes;
                  dispatch(setCart(getUserCartResult.data));
                },
              );
            })();
            dispatch(setCurrentUser(getMeResult.data.data));
            dispatch(setIsAuth(true));
          } else {
            // ? case: "jwt expired"
            setToken('');
            dispatch(setIsAuth(false));
          }
        })
        .catch(() => {
          dispatch(setIsAuth(false));
        });
    } else {
      dispatch(setIsAuth(false));
    }
  }, [token]);
<<<<<<< HEAD
=======
  useEffect(() => {
    handleGetMe();
  }, [token]);
};

export default function HomeTemplate({ children }: WrapperComponentProps) {
  const [isClient, setIsClient] = useState(false);

  useGetMe();
>>>>>>> 0595a16089032e3ab77fef9886a1613486f99bba

  useEffect(() => {
    setIsClient(true);
  }, []);

<<<<<<< HEAD
  useEffect(() => {
    handleGetMe();
  }, [token]);

=======
>>>>>>> 0595a16089032e3ab77fef9886a1613486f99bba
  return isClient ? (
    <>
      <Header />
      <NavBar />
      <>{children}</>
      <Footer />
<<<<<<< HEAD
=======
      <Messages />
>>>>>>> 0595a16089032e3ab77fef9886a1613486f99bba
    </>
  ) : (
    <></>
  );
}
