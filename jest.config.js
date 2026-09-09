/* eslint-disable */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^src/addresses$': '<rootDir>/src/addresses/types.ts',
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: ['dist'],
};
