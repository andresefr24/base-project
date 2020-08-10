import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  
  html {
    height:100%;
  }
  
  body {
    height:100%;
    
    #root {
      height:100%;
    }
  } 
  
  a{text-decoration: none}
  
  ::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #112031;
}

::-webkit-scrollbar-thumb {
  background: #3675b3;
}

::-webkit-scrollbar-thumb:hover {
  background: #3675b3;
}
`;

export default GlobalStyle;
