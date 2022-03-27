# Evercode Lab ESLint Config

## Configurations

We export four ESLint configurations for your usage:

1. [Default](#default-config)
2. [React](#react-config)

### Default Config

Install package with peer dependencies:

```sh
npx install-peerdeps --dev @eclab/eslint-config \
  && npm install --save-dev eslint-config-airbnb-base
```

In your `.eslintrc`:

```json
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "extends": [
    "airbnb-base",
    "airbnb-typescript/base",
    "@eclab/eslint-config"
  ]
}
```

> **NOTE:** Make sure to [specify your environment](#specifying-environments) based on your project

### React Config

React-specific rules with

- [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react)
- [`eslint-plugin-jsx-a11y`](https://github.com/evcohen/eslint-plugin-jsx-a11y)

```sh
npx install-peerdeps --dev @eclab/eslint-config \
  && npm install --save-dev eslint-config-airbnb eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

**In your `.eslintrc`:**

```json
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "extends": [
    "airbnb",
    "airbnb-typescript",
    "@eclab/eslint-config",
    "@eclab/eslint-config/react"
  ]
}
```

## Specifying Environments

The only environment we do specify by default is `es6`. [View all available environments](https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments)

Therefore, you should specify your project's environment yourself in your ESLint config. For example:

```json
{
  "root": true,
  "env": {
    "browser": true,
    "node": true
  },
  "parser": "@typescript-eslint/parser",
  "extends": [
    "airbnb-base",
    "airbnb-typescript/base",
    "@eclab/eslint-config"
  ]
}
```

## Code examples

Default:

```typescript
function getZero(): number {
  return 0
}

const foregroundColor = 'transparent'
const font = 'Arial'
const myLink = { img: 'btn.gif' }

const foo = {
  numbers: ['one', 'two', 'three', 'four', 'five', 'six'],
  data: {
    a: {
      id: 123,
      type: 'String',
      isAvailable: true,
    },
    b: { id: 456, type: 'Int' },
  },
}

const toString = (value: number): string => value.toString()

class TestClass {
  public history: History
  protected value: boolean

  protected static isLong(amount: string, maxLength: number): boolean {
    const parts = amount.trim().replace(',', '.').split('.')

    return parts[1] ? parts[1].length > maxLength : false
  }
}

export default TestClass

```

React:

```typescript jsx
import React, { useState, useEffect } from 'react'

import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Breadcrumb {
  breadcrumb: string
  href: string
}

const Breadcrumbs: React.FC = () => {
  const router = useRouter()
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([])

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/')
      linkPath.shift()

      const pathArray = linkPath.map((path, i) => ({ breadcrumb: path, href: `/${linkPath.slice(0, i + 1).join('/')}` }))
      setBreadcrumbs(pathArray)
    }
  }, [router])

  if (!breadcrumbs) {
    return null
  }

  return (
    <StyledBreadcrumb>
      <StyledSpan>
        <Link href='/' passHref>
          <StyledLinkMain>Main</StyledLinkMain>
        </Link>
      </StyledSpan>
      {breadcrumbs
        && breadcrumbs.map((breadcrumb) => (
          <span key={breadcrumb.href}>
            <Link href={breadcrumb.href}>
              <>
                <StyledSpan> &gt; </StyledSpan>
                <StyledLink>{Route2LabelMap[breadcrumb.breadcrumb]}</StyledLink>
              </>
            </Link>
          </span>
        ))}
    </StyledBreadcrumb>
  )
}

export default Breadcrumbs

```
