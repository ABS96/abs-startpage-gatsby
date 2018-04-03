import React from 'react'
import Link from 'gatsby-link'

import { css } from 'emotion'

const titleColor='#BBB'

const LinkCategory = props => (
  <div
    className={css`
      margin: 0.5em 1.5em;
      min-width: 13.75em;
    `}
  >
    <h1
      className={css`
        align-self: center;
        font-size: 2.25em;
        text-align: center;
        text-transform: uppercase;
        color: ${titleColor};
        margin: .3em 0;
        padding-bottom: .2em;
        border-bottom: 2px solid ${titleColor};
      `}
    >{props.title}</h1>
    {props.elements.map(curr => (
      <LinkEntry key={curr.label} name={curr.label} location={curr.location} />
    ))}
  </div>
)

const LinkEntry = props => (
  <a
    className={css`
      display: block;
      text-decoration: none;
      color: black;
      font-size: 1.33em;
      transition: .2s;

      &:hover {
        color: #222;
        padding-left: .2em;
      }
    `}
    href={props.location}
  >
    {props.name}
  </a>
)

export default ({ data }) => (
  <div
    className={css`
      font-family: 'Open Sans', sans-serif;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      height: 100vh;
    `}
  >
    <div
      className={css`
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-content: center;
      `}
    >
      {data.allLinksYaml.edges.map(({ node }) => (
        <LinkCategory
          key={node.title}
          title={node.title}
          elements={node.elements}
        />
      ))}
    </div>
  </div>
)

export const query = graphql`
  query StartpageQuery {
    allLinksYaml {
      edges {
        node {
          title
          elements {
            label
            location
          }
        }
      }
    }
  }
`
