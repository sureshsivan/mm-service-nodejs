var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development',
    mongoUsername = process.env.MONGO_USERNAME || 'mongo',
    mongoPassword = process.env.MONGO_PASSWORD || 'mongo',
    mongoHost = process.env.MONGO_SVC_URL || 'localhost:27017'
    mongoSvcUrl = 'mongodb://' + mongoUsername + ':' + mongoPassword + '@' + mongoSvcUrl + '/' + mongoDbName;
// mongodb://<dbuser>:<dbpassword>@ds013486.mlab.com:13486/mm-dev

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'mm-service-nodejs'
    },
    port: process.env.PORT || 3000,
    db: mongoSvcUrl
  },

  test: {
    root: rootPath,
    app: {
      name: 'mm-service-nodejs'
    },
    port: process.env.PORT || 3000,
    db: mongoSvcUrl
  },

  production: {
    root: rootPath,
    app: {
      name: 'mm-service-nodejs'
    },
    port: process.env.PORT || 3000,
    db: mongoSvcUrl
  }
};

module.exports = config[env];
