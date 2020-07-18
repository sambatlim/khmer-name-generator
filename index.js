const getrandomname = require('./lib/namegenerator');
const provincewithlatlong = require('./lib/addressgenerator')


let methods = {};
methods.name = getrandomname;
methods.provincewithlatlong = provincewithlatlong;

module.exports = methods