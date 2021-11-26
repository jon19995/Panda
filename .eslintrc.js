module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    ignorePatterns: ['.eslintrc.js', 'webpack.config.js', 'tsconfig.json'],
    // Пресет с настройками. prettier должен быть последним.
    // Он удаляет некоторые правила eslint из-за которых могут возникать конфликты. */
    extends: [
        'eslint:recommended',
        'plugin:promise/recommended',
        'plugin:sonarjs/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['import', 'promise', 'optimize-regex', 'sonarjs', 'prettier'],
    // здесь мы подключаем плагины
    // Здесь переопределяются правила плагинов
    rules: {
        curly: 'error',
        eqeqeq: 'warn',
        'no-debugger': 'warn',
        'import/order': [
            'warn',
            {
                'newlines-between': 'always-and-inside-groups',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: false,
                },
            },
        ],
        'import/named': 0,
        'import/no-named-as-default': 0,
        'import/no-unresolved': 'warn',
        'import/namespace': 'warn',
        'import/default': 'warn',

        'optimize-regex/optimize-regex': 'warn',
        'prettier/prettier': [
            'warn',
            {
                tabWidth: 4,
                endOfLine: 'auto',
                printWidth: 120,
            },
        ],
        'promise/prefer-await-to-then': 'error',
        'sonarjs/prefer-immediate-return': 0,
        'sonarjs/no-duplicate-string': ['warn', 4],
        'sonarjs/no-small-switch': 0,
    },
};
