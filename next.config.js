/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    sassOptions: {
        logger: {
            warn: function (message) {
                console.warn(message)
            },
            debug: function (message) {
                console.log(message)
            }
        },
    },
    images: {
           domains: ['theconnorwilson.com'],
           path: `/_next/image`
       },
}

module.exports = nextConfig
