module.exports = {
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  setupFilesAfterEnv: ["./src/setupTests.js"],
  moduleNameMapper: {
    "\\.(css|less|scss|svg)$": "jest-transform-stub"
  },
  testEnvironment: "jsdom"
};