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
- `/src/formatters`: Reusable formatters
- `/src/validators`: Reusable validators
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

## Using local package

To use `@inventures/react-lib` in development, is recommended to use it as local package, to avoid waiting until publish new versions. For this, you need to link the react, react-dom and material-ui version of your project inside react-lib (to use the same packages instances), and then link react-lib in your project:

```bash
# Link project dependencies into react-lib
cd <PROJECT_DIR>/node_modules
cd react
yarn link
cd ../react-dom
yarn link
cd ../@material-ui/core
yarn link

cd <@inventures/react-lib dir>
yarn link react react-dom @material-ui/core

# Build react-lib and link it
yarn build:lib
cd dist
yarn link

# Link react-lib in your project
cd <PROJECT_DIR>
yarn link "@inventures/react-lib"
```

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



Changing all tags with respective names.

## PROJECT ARCHITECTURE

Our inventures project is developed in Typescript and React. Components use validation hooks to check user inputs and give according feedback.

- **COMPONENTS** This directory contains all reusable React components which will be accesible by Storybook stories, and thus shown in your storybook. Current existing components are:

  - Index
  - Input
  - Product Card A

- **HOOKS**: Hooks are the most important part in our input components. Our current main hook is useInput, which you can find in `hooks / useInput.hooks.ts` Hook parameters are:

  - `defaultValue: string`: for the original user input
  - `options: useInputOptions = {}`: the configuration object for the hook. The options object type is:
    `type useInputOptions = { formatter?: Formatter; debounceTime?: number; validators?: Validator[]; asyncValidators?: AsyncValidator[]; };`
    The possible configurations are the following:
  - `formatter`: recieves user input and processes it according to a specified format.
  - `debounceTime`: the amount of time (in millisecons) a validator waits after the user has finished typing a character.
  - `validators`: Recieves a validator array. Validators implement the Validator interface and can be found in `hooks / validators`.
  - `asyncValidator`: Recieves an asyncValidator array. Async Validators implement the same Validator interface. They differ from regular validators by returning a bolean within a promise. Async validators run last, and their result shows as soon as the promise has been completed. Slow validations should be handled with Async Validators.

- **VALIDATORS** Validators can be found in `hooks/validators` directory.
  Current implemented validators are:
  _ `Validator`: main Validator interface. They run as soon as the user has finished typing and alter the hook state. They receive user input string and return an error message.
  _ EmailValidator
  _ RegexValidator
  _ RequiredValidator
  _ RutFormatValidator
  _ RutValidator

- **STORIES** Stories are Storybook's equivalent to Views. Import here your reusable React components and place them within their required context.

---

## IMPLEMENTED HOOKS:

### - useInput.hook
- _Return type_: this hook returns an array with it's value, setter type, state, error array, and a flushValidate function.
- _State_: This hooks manages 3 states: value, erros, and typing (errors will not be shown while the user is typing).
- _Methods_:
  - `flushValidate`: callback function, stops the debounce wait time and runs actions according to specific conditions.
  - `validate`: callback function. Runs all validators given in useInput parameters to find user input errors. Synchronous validators run first, followed by all asynchronous, if present. In case of erros, they change the hook's state and display them accordingly.
  - `handleSetValue`: callback function, runs the input value through the formatter. This new value is then set as SetValue.
  - `stopTyping`: callback function, called each time user inputs a new character. It runs the set debounce time, followed by `validate` function to run all validators.
  - `status`: useMemo function. Is in charge of setting the hook state, according to:
    - if user is typing, state will be _PENDING_.
    - if there pending asynchronous validations, state will be _PENDING_.
    - if all synchronous and asynchronous validations have finished running, hook state will be _ERROR_ in case of validation errors, or _SUCCESS_ otherwise.
### - useSearchBar.hook
* *Return type*: this hook returns an array of objects or strings with it's value from the searching values depending of different types of query.
* *Methods*:
    * `search`: callback function, that handles the type of query recib and runs actions according to specific conditions to return the searching elements. In case of a Synchronous function it waits for the function to finish and get its values.
    *   `handleSetValue`: callback function, runs the input value through the formatter. This new value is then set as SetValue.
    *   `stopTyping`: callback function, called each time user inputs a new character to search. It runs the set debounce time.
