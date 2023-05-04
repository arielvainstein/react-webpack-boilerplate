module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["app/**/*.{js,jsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
