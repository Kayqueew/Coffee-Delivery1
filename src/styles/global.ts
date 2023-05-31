import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: ${(props) => props.theme.white};
  -webkit-font-smoothing: antialiased;
}

@media (max-width: 1290px) {
  html {
    font-size: 85%;
  }
}

@media (max-width: 1024px) {
  html {
    font-size: 85%;
  }
}



body, input, textarea, button, header {
  font-family: 'roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem; 
} 
`
