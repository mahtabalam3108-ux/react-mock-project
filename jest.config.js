export default { 
    rootDir: ".",
    testEnvironment: "jsdom",
    moduleNameMapper: {
        // Handle CSS/Style imports
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
        "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js"
    },
    "transform": {
      "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
    },
    setupFilesAfterEnv: [
        "@testing-library/jest-dom", 
        "<rootDir>/jest.setup.js"
    ],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    },
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    reporters: [ 
        "default", 
        [ 
            "jest-html-reporter", 
            { 
                pageTitle: "Test Report", 
                outputPath: "reports/test-report.html", 
                includeFailureMsg: true, 
                includeConsoleLog: true, 
            }, 
        ], 
    ], 
    coverageThreshold: {
        "./src/": {
            branches: 90,
            functions: 90,
            lines: 90,
            statements: 90,
        }
    }
};