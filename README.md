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

## Development

For development, you should create components in `/src/components` or hooks in `/src/hooks`. To visualize changes, create an history for that component/hook in `/src/stories` and run storybook.

```bash
yarn storybook
```

If you are creating a new hook, make sure to write some tests in `/src/hooks/<hook-name>.test.ts`. Then, to tun all the tests and watch the changes, run

```bash
yarn test
```

For components only create the story for storybook.

## Publish to Github pages

Run the following command

```bash
yarn publish:gh
```

## Publish to NPM

Run the following commands to build and publish

```bash
yarn build:lib
yarn publish:npm
```

## Publish component to Bit

To add components to Bit, you must have installed [bit](https://github.com/teambit/bit) globally. Then , run the following commands

```bash
bit add src/components/<component-file> -i <componentId>
bit build
bit tag --all <version>
bit export inventures.react-lib
```

Changing all tags with respective names.
