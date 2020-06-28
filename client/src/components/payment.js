import React from 'react';
import ReactDOM from 'react-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Pay from './pay/pay';
const stripePromise = loadStripe('pk_test_51Gye5bDuX2TrUjLdcvRJBsFurcd4it6nM8tBV9oa4Z15n4Ww67VFhpSDr8qYDL7nLhyGpFDVZfh3aaCxg0ACtYr900EqTWJycm');
function Payment() {
  return (
    <Elements stripe={stripePromise}>
      <Pay />
    </Elements>
  );
};
export default Payment;