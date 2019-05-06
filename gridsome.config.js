const path = require("path");

module.exports = {
  plugins: [
    {
      use: "@gridsome/plugin-critical",
      options: {
        paths: ["/"],
        width: 1300,
        height: 900
      }
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000,
        exclude: ["/exclude-me"],
        config: {
          "/posts/*": {
            changefreq: "weekly",
            priority: 0.5
          },
          "/about": {
            changefreq: "monthly",
            priority: 0.7
          }
        }
      }
    }
  ],
  siteName: "CRT televisions",
  siteUrl: process.env.GRIDSOME_APP_BASE_URL,
  chainWebpack: config => {
    const oneOfsMap = config.module.rule("scss").oneOfs.store;
    oneOfsMap.forEach(item => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          resources: [
            path.resolve(`${__dirname}/src/styles/`, "variables/importer.scss"),
            path.resolve(`${__dirname}/src/styles/`, "mixins/importer.scss")
          ]
        })
        .end();
    });
  }
};
