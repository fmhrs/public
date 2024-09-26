/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
    basePath: isDev ?  '' : '/public',
};
export default nextConfig;
