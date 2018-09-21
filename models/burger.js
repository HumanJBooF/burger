const orms = require('../config/orms.js');

const burger = {
    selectAll: _cb => {
        orms.selectAll('burgers', res => {
            _cb(res);
        });
    },
    insertOne: _cb => {
        orms.insertOne(res => {
            _cb(res);
        });
    },
    updateOne: _cb => {
        orms.updateOne(res => {
            _cb(res);
        });
    }
};

module.exports = burger;