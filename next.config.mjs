/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        //webURL: "http://localhost:3000",
        webURL: "https://box-and-move.vercel.app/",
      },

};

export default nextConfig;








// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;




// import createMDX from '@next/mdx'
 
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Configure `pageExtensions` to include markdown and MDX files
//   pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
//   // Optionally, add any other Next.js config below
// }
 
// const withMDX = createMDX({
//   // Add markdown plugins here, as desired
// })
 
// // Merge MDX config with Next.js config
// export default withMDX(nextConfig)