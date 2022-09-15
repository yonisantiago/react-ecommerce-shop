
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { Layout } from '../containers/Layout';
import { Login } from '../pages/Login';
import { RecoveryPassword } from '../pages/RecoveryPassword';
import {CreateAccount} from '../pages/CreateAccount';
import { SendEmail } from '../pages/SendEmail';
import '../styles/global.css'
import { MyAccount } from '../pages/MyAccount';
import { Orders } from '../pages/Orders';
import { Checkout } from '../pages/Checkout';
import { NewPassword } from '../pages/NewPassword';
import {AppContext} from '../context/AppContext.js';
import {useInitialState} from '../hooks/useInitialState.js';

export const App = () => {
  const initialState = useInitialState()
  return (
  
    <AppContext.Provider value={initialState}>
    <BrowserRouter>
    <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/password-recovery' element={<RecoveryPassword/>}/>
          <Route path='/new-password' element={<NewPassword/>} />
          <Route path='/send-email' element={<SendEmail/>}/>
          <Route path='/signup' element={<CreateAccount/>}/>
          <Route path='/account' element={<MyAccount/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
    </AppContext.Provider>
      
  )
};

