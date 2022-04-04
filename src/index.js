import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from '../src/Redux/Store/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor } from '../src/Redux/Store/store'
// import i18n from './components/changeLanguage/i18n'
// import { I18nextProvider } from 'react-i18next'


ReactDOM.render(
  <Provider store={store}>
    <PersistGate  persistor={persistor}>
    <BrowserRouter> 
    {/* <I18nextProvider i18n={ i18n }> */}
    <Suspense fallback={(<div>Loading...</div>)}>
          <App />
        </Suspense>
    {/* </I18nextProvider> */}
    </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);