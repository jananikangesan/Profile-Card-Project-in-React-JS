import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
//import './index.css'
//import './Qrcode.css'
import { UserCard } from './UserCard'
import { QrCode } from './QrCode'
import { Cart } from './formSamples/Cart'
import { UserDetails } from './formSamples/UserDetails'
import { RegFrm } from './formSamples/RegFrm'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UserCard/> */}
    {/* <QrCode/> */}
    {/* <Cart/> */}

    {/* <UserDetails/> */}
    <RegFrm/>

  </React.StrictMode>,
)
