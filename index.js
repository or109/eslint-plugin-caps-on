const reqAll = require('req-all');

const rules = reqAll('rules', { camelize: false });

module.exports = {
    rules,
};