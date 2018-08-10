module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: 'airbnb-base',
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
    },
    rules: {
        indent: ['error', 4, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
        quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    },
};
