# Evercode Lab ESLint Config

## Configurations

We export four ESLint configurations for your usage:

1. [Default](#default-config)
2. [Fabric](#fabric-config)
3. [React](#react-config)

### Default Config

Install package with peer dependencies:

```sh
npx install-peerdeps --dev @evercodelab/eslint-config
```

In your `.eslintrc`:

```json
{
  "root": true,
  "extends": "@evercodelab/eslint-config"
}
```

> **NOTE:** Make sure to [specify your environment](#specifying-environments) based on your project

### Fabric Config

Includes [`eslint-plugin-filename-rules`](https://github.com/dolsem/eslint-plugin-filename-rules)

```sh
npx install-peerdeps --dev @evercodelab/eslint-config \
  && npm install --save-dev eslint-plugin-filename-rules
```


In your `.eslintrc`:

```json
{
  "root": true,
  "extends": ["@evercodelab/eslint-config", "@evercodelab/eslint-config/fabric"]
}
```

### React Config

React-specific rules with

- [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react)
- [`eslint-plugin-jsx-a11y`](https://github.com/evcohen/eslint-plugin-jsx-a11y)

```sh
npx install-peerdeps --dev @evercodelab/eslint-config \
  && npm install --save-dev eslint-plugin-react eslint-plugin-jsx-a11y
```

**In your `.eslintrc`:**

```json
{
  "root": true,
  "extends": ["@evercodelab/eslint-config", "@evercodelab/eslint-config/react"]
}
```
