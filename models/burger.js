const orm = require('../config/orm.js');

const burger = {
    selectAll: _cb => {
        orm.selectAll('burgers', res => {
            _cb(res);
        });
    },
    insertOne: (columns, values, _cb) => {
        orm.insertOne('burgers', columns, values, (res) => {
            _cb(res);
        });
    },
    updateOne: (obsColVals, condition, _cb) => {
        orm.updateOne('burgers', obsColVals, condition, (res) => {
            _cb(res);
        });
    }
};

module.exports = burger;