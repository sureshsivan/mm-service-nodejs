var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development',
    mongoUsername = process.env.MONGO_USERNAME || 'mongo123',
    mongoPassword = process.env.MONGO_PASSWORD || 'MyMongo123',
    mongoHost = process.env.MONGO_SVC_URL || 'ds013486.mlab.com:13486',
    mongoDbName = process.env.MONGO_DB_NAME || 'mm-dev',
    mongoSvcUrl = 'mongodb://' + mongoUsername + ':' + mongoPassword + '@' + mongoHost + '/' + mongoDbName;
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
