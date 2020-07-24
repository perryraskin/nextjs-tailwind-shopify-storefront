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

* [x] TailwindCSS
* [ ] Display store products
* [ ] Product pages
* [ ] Add to cart functionality

## Demo

You can visit here to see the demo: [https://next-tailwind-shopify-storefront.herokuapp.com/](https://next-tailwind-shopify-storefront.herokuapp.com/)

## Usage

Install dependencies

```
npm install
```

Add `graphql.config.json` in root and include GraphQL endpoint and Storefront access token

```json
{
  "overwrite": true,
  "generates": {
    "models/shopify.model.ts": {
      "schema": [
        {
          "https://[SITE-NAME].myshopify.com/api/graphql": {
            "headers": {
              "X-Shopify-Storefront-Access-Token": "[STOREFRONT_ACCESS_TOKEN]"
            }
          }
        }
      ],
      "documents": "services/**/*.{ts,tsx}",
      "plugins": ["typescript", "typescript-operations"]
    }
  }
}
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
