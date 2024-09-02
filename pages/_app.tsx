import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Layout from './components/layout';
import { AuthContextProvider } from '@/src/contexts/authContext';


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthContextProvider>
      <Elements stripe={stripePromise}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Elements>
    </AuthContextProvider>
  );
};

export default App;
