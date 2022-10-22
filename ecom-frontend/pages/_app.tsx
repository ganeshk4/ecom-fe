import '../styles/globals.css'
import type { AppProps } from 'next/app';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { wrapper } from "../store/store";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/store.slice';
import { getRequest } from '../utils/requests';


function MyApp({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();
  const fetchUser = async () => {
    try {
      const {data: res} = await getRequest('/userInfo');
      console.log(res);
      if (res && res.isSuccess) {
        dispatch(setUser(res.user));
      }
    } catch(e) {
      console.log(e);
    }
  };

  useEffect(()=> {
    fetchUser();
    // dispatch(setUser({createdAt: "2022-10-19T09:33:55.000Z",
    // firstName: "GANESH",
    // id: 1,
    // lastName: "Jadhav",
    // mobile: "9920566922",
    // modifiedAt: "2022-10-19T09:47:55.000Z",
    // otpVerified: true}))
  }, []);
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp);
