import type { Config } from '@jest/types';

const config = async (): Promise<Config.InitialOptions> => {
  return {
    preset: 'ts-jest',
    bail: 1,
    verbose: true,
    rootDir: '.',
    testEnvironment: 'jest-environment-jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testMatch: ['<rootDir>/**/?(*.)test.{ts,tsx}'],
    testPathIgnorePatterns: ['/node_modules/'],
    // setupFiles: ['<rootDir>/jest.env.ts'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    transform: {
      '^.+\\.(ts|tsx)?$': [
        'ts-jest',
        {
          isolatedModules: true,
        },
      ],
    },
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '^~/*/(.*)$': '<rootDir>/src/$1',
    },
  };
};

export default config;
