/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},

	images: {
		domains: ["localhost", "static-zip.imgix.net", "images.ctfassets.net"],
	},
};

export default nextConfig;
