/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    experimental: {
        modern: true, // build modern JS for modern browsers
        scrollRestoration: true
    }
};

export default nextConfig;