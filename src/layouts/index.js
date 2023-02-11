import React from "react"
import { Link } from "gatsby"
import gray from "gray-percentage"
import "typeface-rochester"
import "typeface-josefin-sans"
import "typeface-josefin-slab"

import { rhythm, scale } from "../utils/typography"
import Container from "../components/container"

class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <header css={{ background: "#f4f2e9" }}>
          <div css={{ height: rhythm(1.5), margin: `0 auto`, maxWidth: 1024, display: "flex", alignItems: "center", justifyContent: "center"}}>
            W E L C O M E
          </div>
        </header>
        <Container paddingBottom={0} paddingTop={rhythm(1 / 2)}>
          <Link to="/">
            <div css={{ width: 193, overflow: `hidden` }}>
              <h1
                css={{
                  color: gray(10),
                  fontSize: scale(1.8).fontSize,
                  margin: 0,
                  fontFamily: `Rochester, serif`,
                  float: `right`,
                  fontDisplay: `block`,
                }}
              >
                Umami
              </h1>
              <h4
                css={{
                  color: gray(10),
                  fontFamily: `"Josefin Sans", sans-serif`,
                  marginBottom: 0,
                  float: `right`,
                }}
              >
                Food Magazine
              </h4>
            </div>
          </Link>
          <div css={{ float: `right` }}>
            <Link
              to="/recipes/"
              css={{
                color: `inherit`,
                position: `relative`,
                bottom: rhythm(1.5),
                textDecoration: `none`,
                fontSize: scale(0.25).fontSize,
                ":hover": {
                  textDecoration: `underline`,
                },
              }}
            >
              Recipes
            </Link>
          </div>
        </Container>
        {this.props.children}
        <footer css={{ background: "#f4f2e9" }}>
          <Container>
            <div css={{ display: "flex", justifyContent: `center` }}>
              <p>
                A <strong> Gatsby - Drupal </strong> demo app
              </p>
            </div>
          </Container>
        </footer>
      </div>
    )
  }
}

export default DefaultLayout
