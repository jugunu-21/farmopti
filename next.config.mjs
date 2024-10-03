/** @type {import('next').NextConfig} */
// const nextConfig = {};

// // // Assuming you want to add the images configuration to nextConfig
// // Object.assign(nextConfig, {
// //   images: {
// //     domains: ['example.com', 'anotherdomain.com', 'aceternity.com','www.shutterstock.com'],
// //   },
// // });

// export default nextConfig;
const nextConfig = {
    experimental: {
      fontOptimization: false,
    },
    images: {
      domains: ['example.com', 'anotherdomain.com', 'aceternity.com','www.shutterstock.com','c7.alamy.com','api.dicebear.com',"unsplash.com/images",
        "https://www.pexels.com/search/free%20download/"
      ],
    },
    // Existing configuration...
  };
  
  export default nextConfig;