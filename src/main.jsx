import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Store from './store/Store.jsx'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
  //=================step 3==========================
  <Provider store={Store}> 
  {/* aab app ke pore componenet store ko access kar sakte hai  */}
  {/* this is for connect redux store with react  */}
 
    <App />

  </Provider>,
)
