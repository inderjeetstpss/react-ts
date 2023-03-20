import * as React from 'react';
import './style.css';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  'pk_test_51MZfH8LnLVDPioZzObdF7ohCdnMzEgZHH8aZjYGEix2ke4swjDei6n0I3zkKkZLAXhNEcUCEfZpt8c9YtIySS1mY00iZq0US1c'
);
const clientScret =
  'sk_test_51MZfH8LnLVDPioZz8oe1jJuvX6UUCg7Q9saKR5W97VBLvHSSl9jqzzhOmbFCNrDHFnL4E4vetF3JMtydOha7MLEz00NJLWmQC6';
export default function App() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: clientScret,
  };

  return <Elements stripe={stripePromise} options={options}></Elements>;
}
