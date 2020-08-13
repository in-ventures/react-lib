# react-lib

## Software stack

- Node: 12.18.3
- Package Manager: yarn 1.22.4
- Typescript: 3.7.2
- React: 16.13.1
- material-ui: 4.11.0

## Running the software

The software can be started by the following commands:

- `yarn storybook` To start the storybook local server

## Code structure

The source code is structured as follows:

- `/` Root folder, global congifuration and scripts
- `/dist` Generated folder with output from storybook build
- `/node_modules` Dependancies
- `/src`: Source code
- `/src/components`: Reusable components
- `/src/config`: Config to get working the project as stoorybook custom addons and MaterialUI theme
- `/src/hooks`: Reusable hooks
- `/src/stories`: Stories for storybook

## Publish to Github pages

Run the following command

```bash
yarn publish:gh
```

## Publish to NPM

-
Build the following commands to build and publish

```bash
yarn build:lib
yarn publish:npm
```
