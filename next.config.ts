const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'], // Add Cloudinary's domain to allowed domains
  },
  compiler: {
    styledComponents: true,
  },
  publicRuntimeConfig: {
    // Available on both server and client
    theme: "DEFAULT",
  },
};

export default nextConfig;
