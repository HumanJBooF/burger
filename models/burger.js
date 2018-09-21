const orms = require('../config/orm.js');

const burger = {
    selectAll: _cb => {
        orms.selectAll('burgers', res => {
            _cb(res);
        });
    },
    insertOne: (columns, values, _cb) => {
        orms.insertOne('burgers', columns, values, (res) => {
            _cb(res);
        });
    },
    updateOne: (obsColVals, condition, _cb) => {
        orms.updateOne('burgers', obsColVals, condition, (res) => {
            _cb(res);
        });
    },
    delete: (condition, _cb) => {
        orms.delete('burgers', condition, (res) => {
            _cb(res);
        })
    }
};

module.exports = burger;