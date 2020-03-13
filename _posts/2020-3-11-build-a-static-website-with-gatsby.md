---
layout: post
title:  "Build a static website with Gatsby"
date:   2020-3-11 12:30:54
subtitle: "A complete guide to build a high performance static website with Gatsby and get 100% score on Google Lighthouse"
author: "ntsd"
catalog: true
categories:
    - Programming
tags:
    - Programming
    - Gatsby
    - React
    - GraphQL
    - Progressive Web App
    - TypeScript
published: true
# header-img: "../img/in-post/2020-1-3-install-openwrt-into-banana-pi-r64/plash-speed-2.jpg"
---

## Installations

### Install Gatsby and generate website

if you're beginner you should follow the getting start from Gatsby

<https://www.gatsbyjs.org/docs/quick-start/>

I'll skip this step because it too easy

``` Shell
# Install the Gatsby CLI
npm install -g gatsby-cli

# Create a new site
gatsby new gatsby-site

# Change directories into site folder
cd gatsby-site

# gatsby develop
gatsby develop
```

now you'll get the Gatsby default page

![now you'll get the Gatsby default page](/img/in-post/2020-3-11-build-a-static-website-with-gatsby/1.png)

### Make Gatsby support TypeScript

Install type script dependencies

``` Shell
npm install gatsby-plugin-typescript
npm install -D typescript
```

Change all .js file to .tsx

Add "gatsby-plugin-typescript" to gatsby-config.js

``` JS
plugins: [`gatsby-plugin-netlify`]
```

Add typescript eslint

new files `tsconfig.json` and `.eslintrc.js` to root project directory

To generate `tsconfig.json` you can use this script to generate sample config

``` Shell
./node_modules/typescript/bin/tsc --init
```

tsconfig.json

``` JS
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "esnext",
    "jsx": "preserve",
    "lib": ["dom", "esnext"],
    "strict": true,
    "noEmit": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "noUnusedLocals": false,
    "allowJs": true
  },
  "exclude": ["node_modules", "public", ".cache"]
}
```

edit `.eslintrc.js`

you can enable or disable rules as your want

``` JS
module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ['@typescript-eslint', 'react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  rules: {
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
    '@typescript-eslint/explicit-function-return-type': 'off'
  },
  overrides: [
    // Override some TypeScript rules just for .js files
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    }
  ]
};
```

Install eslint and typescript packages to dev dependencies

``` Shell
npm install -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint
```

*** นอนก่อนเดี๋ยวมาต่อ ***

## References

- <https://www.gatsbyjs.org/>
- <https://blog.logrocket.com/set-up-a-typescript-gatsby-app/>
