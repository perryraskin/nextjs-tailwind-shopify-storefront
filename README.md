# Next Shopify Storefront

A real-world Shopping Cart built with TypeScript, NextJS, React, Apollo Client, Shopify Storefront GraphQL API, and TailwindCSS.

## Technologies

- [React Hooks](https://reactjs.org/docs/hooks-intro.html) instead of React.Component to create stateful components
- TypeScript static types for Component Props, Actions & Services
- [GraphQL Code Generator](https://graphql-code-generator.com/) to generate models for TypeScript
- GraphQL with [Apollo GraphQL for VS Code](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo) extension
- [Apollo Client](https://www.apollographql.com/docs/react/essentials/get-started/) working with Next.js including server side and client side
- [Shopify Storefront GraphQL API](https://help.shopify.com/en/api/storefront-api/getting-started).
- [TailwindCSS](https://tailwindcss.com/) for the UI
- [Eslint](https://eslint.org/) & [Prettier](https://prettier.io/) to lint and format the source code.
- Deployment on [Heroku](https://heroku.com/)

Hit the **Star** button if you love this project ⭐️

## Checklist

:white_check_mark: &nbsp; TailwindCSS
<br/>:white_check_mark: &nbsp; Display products
<br/>:white_check_mark: &nbsp; Product pages
<br/>:white_check_mark: &nbsp; Add to cart functionality
<br/>:black_square_button: &nbsp; Pagination
<br/>:white_check_mark: &nbsp; Deploy to Heroku

## Demo

You can visit here to see the demo: [https://nextjs-shopify-storefront.herokuapp.com/](https://nextjs-shopify-storefront.herokuapp.com/)

## Usage

Install dependencies

```
npm install
```

Rename `.env.example` to `.env` and add values for Shopify Storefront access token and the URI GraphQL endpoint

```
REACT_APP_STOREFRONT_TOKEN=
REACT_APP_STORE_URI=
```

For development

```
npm run dev
```

For production

```
npm run build
npm start
```
