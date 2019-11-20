// jest.config.js
const { pathsToModuleNameMapper } = require('ts-jest/utils');
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
const { compilerOptions } = require('./tsconfig');

module.exports = {
	rootDir: '.',
  preset: 'ts-jest',
	testEnvironment: 'node',
	collectCoverageFrom: [
    '<rootDir>/src/**/*',
		'!<rootDir>/test/**/*',
	],
	testMatch: ['<rootDir>/test/**/*.spec.ts'],
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths , { prefix: '<rootDir>/' } ),
	cacheDirectory: '<rootDir>/.cache/jest',
};
