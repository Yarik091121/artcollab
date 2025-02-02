const pkg = require("./package");

module.exports = {
  apiPath: "stubs/api",
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`,
    },
  },
  /* use https://admin.bro-js.ru/ to create config, navigations and features */
  navigations: {
    "artcollab.main": "/artcollab",
<<<<<<< HEAD
    "artcollab.detail": "/artcollab/:id",
    "artcollab.promo": "/artcollab/promo",
=======
    "artcollab.collection": "/artcollab/collection",
    // "artcollab.promo": "/artcollab/promo",
    // "artcollab.white-list": "/artcollab/white-list",
    "artcollab.create-nft": "/artcollab/create-nft",
    // "artcollab.tops": "/artcollab/tops",
    "artcollab.contact": "/artcollab/contact",
    "artcollab.detail": "/artcollab/detail",
>>>>>>> origin/dev
  },
  features: {
    "artcollab": {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    "artcollab.api": "/api",
  },
};
