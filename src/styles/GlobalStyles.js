import { createGlobalStyle } from 'styled-components'

import serpentine from './serpentine.woff2'

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'SerpentineMedium';
        src: url(${serpentine});
    }
    html,
    body {
        font-family: Verdana, sans-serif;
    }
    body {
        margin: 0;
    }
    h1,
    h2,
    h3 {
        font-family: SerpentineMedium, Verdana, sans-serif;
    }
`
export default GlobalStyles