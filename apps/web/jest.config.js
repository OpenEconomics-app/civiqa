/** @type {import('jest').Config} */
module.exports = {
preset: 'ts-jest',
testEnvironment: 'node',

// Tell Jest where the tests are
testMatch: ['**/?(*.)+(test).[tj]s?(x)'],

moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],

// Ignore Next build folder
modulePathIgnorePatterns: ['<rootDir>/.next/'],

    // Optional: If you want to mock static assets
    transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
    },
    }
