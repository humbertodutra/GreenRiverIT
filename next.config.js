/* eslint-disable no-unused-vars */
const path = require("path");

module.exports = {
    reactStrictMode: false,
    sassOptions: {
        includePaths: [path.join(__dirname, "/src/assets/scss")],
    },
    i18n: {
        locales: ["en-US", "es-ES", "pt-BR"], // define your locales here
        defaultLocale: "en-US", // set the default locale
      },

    
};
