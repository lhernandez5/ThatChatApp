module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["./src/**/*.{js}"],
  coverageDirectory: "coverage",
  setupFilesAfterEnv: ["./jest.setup.js"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest", // Use babel-jest to transform your JS and JSX files
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
