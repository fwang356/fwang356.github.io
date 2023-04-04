import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const theme = extendTheme({
  colors: {
    periwinkle: {
      100: "#aea2ff",
      200: "#9287e4",
      300: "#766ec8"
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="light"></ColorModeScript>
      <App/>
    </ChakraProvider>
  </React.StrictMode>
);
