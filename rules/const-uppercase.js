const _ = require('lodash');

module.exports = {
    meta: {
        docs: {
            description: 'Keeping enums to be uppercase standard',
            category: 'Mantz style',
            recommended: true,
        },
    },
    create(context) {
        function uppercaseCheck(str) {
            return str !== _.toUpper(str);
        }

        function checkObject(node) {
            const varName = _.get(node, 'id.name', _.get(node, 'key.name'));
            const varKeys = _.get(node, 'init.properties', _.get(node, 'value.properties'));
            const varType = _.get(node, 'init.type', _.get(node, 'value.type'));

            if (varType !== 'ObjectExpression' || _.isEmpty(varKeys)) {
                return;
            }

            const objectFields = _.map(varKeys, term => _.get(term, 'key.value', _.get(term, 'key.name')));

            // check const keys
            const allNonCapsConsts = _.filter(objectFields, uppercaseCheck);

            if (_.size(allNonCapsConsts)) {
                context.report({
                    node,
                    message: `The const "${varName}" keys are not in upper case. Consts should be uppercase. "${allNonCapsConsts}"`,
                });
            }

            _.forEach(varKeys, checkObject);
        }

        return {
            VariableDeclarator(node) {
                const varName = node.id.name;
                const varType = node.init.type;

                // check const name
                if (_.includes(['Literal', 'ObjectExpression', 'ArrayExpression'], varType) && uppercaseCheck(varName)) {
                    context.report({
                        node,
                        message: `The const name "${varName}" is not in upper case. Const names should be uppercase`,
                    });
                }

                checkObject(node);
            },
        };
    },
};
