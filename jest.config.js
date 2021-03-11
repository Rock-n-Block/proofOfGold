module.exports = {
  "roots": ['<rootDir>/src'],
  "transform": {
    '^.+\\.tsx?$': 'ts-jest',
  },
  "testRegex": '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  "moduleFileExtensions": ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  "snapshotSerializers": ['enzyme-to-json/serializer'],
  "setupFilesAfterEnv": ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    "^.+\\.svg": "<rootDir>/src/__mocks__/svgrMock.tsx",
  },
};
