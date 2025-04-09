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
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.[jt]sx?$',
  moduleNameMapper: {
    '^.+\\.(gif|ttf|eot|svg|png)$': 'jest-svg-transformer',
    '\\.(css|less)$': 'identity-obj-proxy'
  },
  testEnvironment: 'jest-environment-jsdom',
  coverageDirectory: './coverage/test',
  collectCoverageFrom: [
    'src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
    '!src/**/*.stories.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
    '!src/**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
    '!src/**/*.spec.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
    '!**/node_modules/**'
  ]
}
