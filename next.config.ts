const seoUrls = {
    "earthmoving": {
        'seattle':  {
            seo: 'excavator-rental-in-seattle',
            url: '/earthmoving/wa/seattle'
        }
    }
};

// Function to generate rewrites from the seoUrls object
const generateRewrites = () => {
  const rewrites = [];

  for (const category in seoUrls) {
    for (const location in seoUrls[category]) {
      const seoData = seoUrls[category][location];
      rewrites.push({
        source: `/${seoData.seo}`,
        destination: `/products/${seoData.seo}`,
      });
    }
  }

  return rewrites;
};

const nextConfig = {
  async rewrites() {
    return generateRewrites();
  },
  images: {
    domains: ['res.cloudinary.com'], // Add Cloudinary's domain to allowed domains
  },
  compiler: {
    styledComponents: true,
  },
  publicRuntimeConfig: {
    // Available on both server and client
    theme: "DEFAULT",
    seoUrls: seoUrls,
  },
};

export default nextConfig;
