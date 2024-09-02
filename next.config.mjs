/** @type {import('next').NextConfig} */

import dotenv from 'dotenv';

dotenv.config();

const nextConfig = {
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_RETURN_URL: process.env.NEXT_PUBLIC_RETURN_URL,
    STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
   
  },

};

export default nextConfig;

