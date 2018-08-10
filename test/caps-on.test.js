const { RuleTester } = require('eslint');
const rule = require('../rules/const-uppercase');

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2017 } });

const TYPE = 'VariableDeclarator';

ruleTester.run('const-uppercase', rule, {
    invalid: [{
        code: "const foo = 'bar'",
        errors: [{ TYPE, message: 'The const name "foo" is not in upper case. Const names should be uppercase' }],
    }, {
        code: "const FOO = { bar: 'bar' }",
        errors: [{ TYPE, message: 'The const "FOO" keys are not in upper case. Consts should be uppercase. "bar"' }],
    }],
    valid: [
        'const KOKO = "myvalue";',
        'const KOKO_1212 = "myvalue";',
        'const KOKO_1212 = { KOKO2: "newVal" };',
    ],
});
