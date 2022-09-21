import { Provider } from 'react-redux';
import store from '../redux';
import { ToastContainer } from 'react-toastify';

import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
// import type { AppProps } from 'next/app'



function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}> 
      <ToastContainer />
      <Component {...pageProps} />
    </Provider>

  )
}

export default MyApp
