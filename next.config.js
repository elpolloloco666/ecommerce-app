/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
    serverActions: true,
  },
  env:{
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
    STRIPE_SIGNING_SECRET: process.env.STRIPE_SIGNING_SECRET,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    SITE_URL: process.env.SITE_URL
  },
  
}

module.exports = nextConfig
