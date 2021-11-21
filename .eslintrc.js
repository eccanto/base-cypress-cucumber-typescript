module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    overrides: [
        {
            files: ['*.json', '*.json5', '*.jsonc'],
            parser: 'jsonc-eslint-parser'
        }
    ],
    extends: [
        'standard',
        'plugin:jsonc/recommended-with-jsonc',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    plugins: [
        '@typescript-eslint'
    ],
    rules: {
        semi: ['error', 'always'],
        indent: ['error', 4],
        'jsonc/indent': ['error', 2, {}],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'space-before-function-paren': 'off'
    },
    globals: {
        cy: 'readonly',
        expect: 'readonly'
    }
};
