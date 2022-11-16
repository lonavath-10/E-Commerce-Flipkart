import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useThemeHook } from './GlobalComponents/ThemeProvider'
import Header from './components/Header';
import { Router } from '@reach/router';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import ProductDetails from './Pages/ProductDetails';
import SignIN from './Pages/SignIn';
import Register from './Pages/Register';
import MyAccount from './Pages/MyAccount'

function App() {
  const [theme] = useThemeHook();
  return (
    <main className={theme? 'bg-black' : 'bg-light-2'}>
      <Header />
      <Router>
        <Home path="/" />
        <MyAccount path="my-account" />
        <SignIN path="sign-in" />
        <Register path='register' />
        <ProductDetails path='product-details/:productId'/>
        <Cart path="/cart"/>
      </Router>
    </main>
  );
}

export default App;
