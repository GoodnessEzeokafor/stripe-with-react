import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe("pk_test_eawe2Tu9CyFiYvIcx9Iodd6400fPUmQ9MY");

function App() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
  </Elements>
  );
}

export default App;
