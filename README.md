[![yarn version](https://badge.fury.io/js/cra-template-typescript-redux.svg)](https://badge.fury.io/js/cra-template-typescript-redux)
[![Action status](https://github.com/alexandr-g/cra-template-typescript-redux/workflows/CI/badge.svg?branch=master)](https://github.com/alexandr-g/cra-template-typescript-redux/actions)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
![yarn downloads](https://img.shields.io/npm/dm/cra-template-typescript-redux)

# Redux + TypeScript + xState

## Available Scripts

In the project directory, you can run:

- `yarn start` - runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- `yarn test` - launches the test runner in the interactive watch mode.

- `yarn build` - builds the app for production to the `build` folder.

- `yarn eject` - exposes content of `react-script` package

- `yarn lint` - lints project files according to eslint rules, see below. Typical use case: continuous integration environments, Travis, CircleCI, etc.

- `yarn fix` - same as `yarn lint`, but also fixes errors, when possible. Typical use case: local development environment, git hooks.

Due to CRA template limitations (we can change only `scripts` and `dependencies` inside generated `package.json`) all configuration is done by adding config files where possible. Also no `devDependencies` for now, sorry.
