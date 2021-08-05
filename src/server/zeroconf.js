var settings = require('./settings')
const host = settings.read('host')
var zeroconf = require('bonjour')({
    interface: host,
})

module.exports = zeroconf
