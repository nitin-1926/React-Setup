# React + TypeScript + Vite + Router + Redux + Saga

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. Along with prettier configuration, this setup also provides a start for the react router and the redux toolkit.

## Router setup

A basic routing has been setup with some routes in a sidebar and different modules getting called as per setup

## Redux setup

Redux has been setup along with sagas. Actions, reducers and store is connected.
A sample action is created to change the theme of the Application.
Ant design (https://ant.design/) has been used to create UI component and setup the app themeing.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
