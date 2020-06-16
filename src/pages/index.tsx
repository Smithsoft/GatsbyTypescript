import React from "react"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link } from "gatsby"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Layout from "../components/layout"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import SVG from "react-inlinesvg"

import indexStyle from "./index.module.scss"

import WomanWithPhoneImage from "../assets/undraw_my_code_snippets_lynx.svg"

class IndexPage extends React.Component {
  render(): React.ReactElement {
    return (
      <Layout>
        <h1>Hello.</h1>
        <h2>I'm Sarah. I'm a developer living in sunny Brisbane.</h2>
        <SVG
          className={indexStyle.landingSvg}
          src={WomanWithPhoneImage}
          alt="Woman with mobile phone"
          title="Woman with mobile phone - credit: https://undraw.co/illustrations"
        ></SVG>
        <p>
          Need a mobile developer? <Link to="/contact">Contact me</Link>!
        </p>
      </Layout>
    )
  }
}

export default IndexPage
