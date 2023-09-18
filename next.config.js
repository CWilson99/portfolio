/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        domains: ['raw.githubusercontent.com'],
    },

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
}

module.exports = nextConfig
