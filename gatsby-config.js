const path = require(`path`);

module.exports = {
    siteMetadata: {
        title: `Jan Feldmann`,
        siteUrl: `https://www.janfeldmann.info`,
        description: `All about Jan Feldmann`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, `src`, `assets`, `images`),
            },
        },
        `gatsby-plugin-react-head`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                useMozJpeg: false,
                stripMetadata: true,
                defaultQuality: 90,
            },
        },
        {
            resolve: `gatsby-alias-imports`,
            options: {
                aliases: {
                    images: `src/assets/images/`,
                    components: `src/components/`,
                },
            },
        },
        {
            resolve: `gatsby-plugin-webfonts`,
            options: {
                fonts: {
                    google: [
                        {
                            family: 'Rubik',
                            variants: ['400', '700'],
                            fontDisplay: 'swap',
                            strategy: 'selfHosted', // 'base64' || 'cdn'
                        },
                        {
                            family: 'Karla',
                            variants: ['400'],
                            fontDisplay: 'swap',
                            strategy: 'selfHosted', // 'base64' || 'cdn'
                        },
                        {
                            family: 'Source Sans Pro',
                            variants: ['300', '400', '700'],
                            fontDisplay: 'swap',
                            strategy: 'selfHosted', // 'base64' || 'cdn'
                        },
                    ],
                },
                formats: ['woff2', 'woff'],
                useMinify: true,
                usePreload: true,
                usePreconnect: true,
            },
        },
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `GatsbyJS`,
                short_name: `GatsbyJS`,
                start_url: `/`,
                icon: './src/assets/images/logo.png',
                background_color: `#f7f0eb`,
                theme_color: `#a2466c`,
                display: `standalone`,
            },
        },
    ],
};
