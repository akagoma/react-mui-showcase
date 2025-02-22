export default {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.app.json'
      }
    ]
  },
  moduleNameMapper: {
    '^.+\\.(gif|ttf|eot|svg|png)$': 'jest-svg-transformer',
    '\\.(css|less)$': 'identity-obj-proxy'
  },
  testEnvironment: 'jest-environment-jsdom',
  coverageDirectory: './coverage/test'
}
