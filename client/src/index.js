import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './store/root.reducers'
import { rootSaga } from './store/root.saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

const app = (
  <Provider store={store}>
    <div>
      <h1>EH</h1>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
