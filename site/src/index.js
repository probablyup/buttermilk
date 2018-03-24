import { rgba } from 'polished';
import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import App from './App';

const red = '#8a0000';

injectGlobal`
  html {
    box-sizing: border-box;
    color: #333;
    font: 10px/1.35 'Karma', 'Georgia', serif;
  }

  html, body, #root {
    height: 100%;
    margin: 0;
  }

  h1 {
    font-size: 2.4rem;
    font-weight: 700;
  }

  h2 {
    font-size: 2.2rem;
    font-weight: 700;
  }

  h3 {
    font-size: 2rem;
    font-weight: 600;
  }

  h4 {
    font-size: 1.8rem;
  }

  h5 {
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5 {
    margin: 0 0 1em;

    + h1, + h2, + h3, + h4, + h5 {
      margin-top: -0.75em;
    }
  }

  ul, ol, p, pre, table {
    margin-bottom: 3rem;
  }

  h1, a {
    color: ${red};
  }

  nav {
    color: ${rgba(red, 0.25)};
  }

  pre, code {
    background: ${rgba(red, 0.05)};
    font-family: 'Overpass Mono', monospace;
  }

  code {
    font-size: 0.9em;
    padding: 0 0.5rem;
  }

  pre {
    background: ${rgba(red, 0.05)};
    font-size: 1.3rem;
    padding: 1rem 1.5rem;

    code {
      background: none !important;
      font-size: inherit;
    }
  }

  table {
    th {
      text-align: left;
      text-decoration: underline;
      padding-bottom: 1rem;
    }

    td {
      padding-right: 2rem;
    }
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));