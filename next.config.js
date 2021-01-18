require('dotenv').config();
module.exports = {
    env: {
        SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
        PORTFOLIO_ADMIN_EMAIL_ADDRESS: process.env.PORTFOLIO_ADMIN_EMAIL_ADDRESS,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });

        return config;
    }
};