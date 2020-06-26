# Gatsby and Typescript

[![Netlify Status](https://api.netlify.com/api/v1/badges/e40519a8-cd28-4cd6-a873-18dc0dc17260/deploy-status)](https://app.netlify.com/sites/compassionate-goldwasser-5d9ccd/deploys)

[Rendered Site on Netlify](https://compassionate-goldwasser-5d9ccd.netlify.app)

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
touch .env.development
```

- [Create Contentful data](https://www.contentful.com/help/contentful-101/), and add entries to `.env.development`:

* Title
    * _Text_
* Slug
    * _Text_
* Published date
    * _Date/Time_
* Body
    * _Rich text_

Then add your space id and access token to the `.env.development` file:

```
GATSBY_GRAPHQL_IDE=playground
CONTENTFUL_SPACE_ID=xabadbeefxa
CONTENTFUL_ACCESS_TOKEN=rOU1bpbWBADBEEF00BADBEEF00BADBEEF00BADBEEFoacgBU
CONTENTFUL_ACCESS_TOKEN_PREVIEW=tKt2R3LvKkI5-eNnxDSEF00BADBEEF00BADBBritjbezE
```

Note that if you run the project without this it will error out on attempting to contact the contentful service.

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

Huge shout out to the great [Katerina Limpi](https://twitter.com/ninaLimpi) for her awesome collection of SVG images!

- [Better than PNG](https://itnext.io/react-svg-images-and-the-webpack-loader-to-make-them-play-nice-2d177ae34d2b)
- [Includes ones from Undraw](https://undraw.co)

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

## Known Issues

* [Why is this not a starter?](https://github.com/Smithsoft/GatsbyTypescript/issues/6)

There's already lots of starters for Gatsby, and this project was just meant as a learning project that could be cloned or forked & used as is.
If for some reason there's a lot of interest, vote that issue up.

* [Node packaging errors](https://github.com/Smithsoft/GatsbyTypescript/issues/5)

At present the following node packaging errors are manifesting on `npm audit fix`:

```bash
npm WARN @pmmmwh/react-refresh-webpack-plugin@0.3.3 requires a peer of react-refresh@^0.8.2 but none is installed. You must install peer dependencies yourself.
npm WARN acorn-dynamic-import@4.0.0 requires a peer of acorn@^6.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN gatsby-plugin-eslint@2.0.8 requires a peer of eslint-loader@^3.0.2 but none is installed. You must install peer dependencies yourself.
npm WARN gatsby-plugin-tslint@0.0.2 requires a peer of tslint@^5.11.0 but none is installed. You must install peer dependencies yourself.

up to date in 13.391s

168 packages are looking for funding
  run `npm fund` for details

fixed 0 of 5 vulnerabilities in 3027 scanned packages
  5 vulnerabilities required manual review and could not be updated
  ```