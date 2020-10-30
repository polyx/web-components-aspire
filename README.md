# Getting started

## Installation

1. Clone the repo

```sh
git clone https://github.com/polyx/web-components-aspire.git
```

2. Install NPM packages

```sh
npm install
```

3. Run storybook

```sh
npm run storybook
```

A website should open in your default browser using port `9001`:
http://localhost:9001

## Useful links

Some useful links for building web components

> [Building Components - Google Developers](https://developers.google.com/web/fundamentals/web-components)

> [Getting Started - StencilJS](https://stenciljs.com/docs/getting-started)

> [Storybook NPM package](https://www.npmjs.com/package/@storybook/html)

# Project structure

## Storybook

Everything in the root directory `~/` is used by Storybook.

We're using Storybook to visualise the Web components.

> [Intro to Storybook](https://storybook.js.org/docs/web-components/get-started/introduction)

## React website

The React App under `./my-app` is a full `create-react-app` website used for testing the components in a "real world" environment. The website is not used by Storybook.

# Development

## Writing stories

1. Write stories by using the format `X-NameOfStory.stories.js`.
2. Import your component using the format in your story.

```sh
import { XXX } from "../components/XXX/index"
```

## Developing web components

1. Add the component in `./components` using `JSX` syntax. (Look at some of our examples).

2. Profit.

## Next Steps:

Start using StencilJS with JSX-syntax found in the [Stencil branch](https://github.com/polyx/web-components-aspire/tree/stencil-js-and-storybook-with-webpack).
