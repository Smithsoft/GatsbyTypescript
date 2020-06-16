# Gatsby and Typescript

- Gatsby
- [Typescript](https://www.typescriptlang.org/)
- Sass - Node SCSS
- GraphQL
- [License MIT](LICENSE)

## Setup

- Install [NodeJS](https://nodejs.dev/how-to-install-nodejs)
- Clone this repo & install dependencies

```bash
git clone git@github.com:Smithsoft/GatsbyTypescript.git
cd GatsbyTypescript
npm install
```

## Run

- Run web project

Development server with hot-reload:

```bash
npm start
```

- Go to: http://localhost:8000/

# Develop

- Recommended editor Visual Studio Code
- Open a Terminal and run:

```bash
npm start
```

- To auto-compile .d.ts files for type support for SCSS
- Open a new Terminal (eg Visual Studio split terminal)

```base
npx tsm src --watch
```

## Use SVG images

* [Better than PNG](https://itnext.io/react-svg-images-and-the-webpack-loader-to-make-them-play-nice-2d177ae34d2b)
* [Includes one from Undraw](https://undraw.co)


## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Smithsoft/GatsbyTypescript)

## Credits

- Started from a [Gatsby template](doc/README.md)
  - See also [gatsby-starter-typescript-sass](https://github.com/pkino/gatsby-starter-typescript-sass)
- License for template is © GatsbyJS [MIT](doc/LICENSE)
  - Code in /src & other places modified from the template is © Smithsoft 2020 [MIT](LICENSE)
  - Developed by translating [Andrew Mead's GatsbyJS](https://youtu.be/8t0vNu2fCCM) tutorial to Typescript

# Troubleshooting

- [Typescript Deep Dive GitBook](https://basarat.gitbook.io/typescript/)
- Clean
  - Delete `.cache*` and `node_modules`
  - `npm install`
  - `npm outdated`
  - `npm update`
