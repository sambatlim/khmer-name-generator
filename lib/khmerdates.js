const month = require('./khmerdate/month');
const day = require('./khmerdate/day');

function getKhmerDay() {
    return day;
}

function getKhmerMonth() {
    return month;
}

module.exports = { getKhmerDay,getKhmerMonth };

