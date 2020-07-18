const path = require('path');

module.exports = {
    entry: './index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    }
};