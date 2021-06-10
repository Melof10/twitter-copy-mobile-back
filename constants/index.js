const { development } = require('../config/config');

module.exports = {
    // connect MONGODB
    MONGODB_URI: development.host + development.port + development.database,
}