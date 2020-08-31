const getrandomname = require('./lib/namegenerator');
const provincewithlatlong = require('./lib/addressgenerator')
const generateWord = require('./lib/wordgenerator');
const khmerDate = require('./lib/khmerdates');

let methods = {};
methods.name = getrandomname;
methods.provincewithlatlong = provincewithlatlong;
methods.generateWord = generateWord;
methods.khmerDate = khmerDate;


module.exports = methods