import { createGlobalStyle } from 'styled-components'

export const cores = {
  branco1: '#FFFFFF',
  branco2: '#FFF8F2',
  vermelho: '#E66767',
  bege: '#FFEBD9'
}

const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.branco2};
    color: ${cores.vermelho};
  }

  .container {
    width: 100%;
    margin: 0 auto;
  }
`

export default GlobalCss
