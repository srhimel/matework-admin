import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { ChakraProvider, Toast, extendTheme } from '@chakra-ui/react'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'

const theme = extendTheme({
  colors: {
    pBlack: '#151515',
    pGreen: '#3FBA73 '
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        color: '#5A585C'
      },
      h1: {
        color: '#151515'
      },
      h2: {
        color: '#151515'
      },
      h3: {
        color: '#151515'
      },
      h4: {
        color: '#151515'
      },
      h5: {
        color: '#151515'
      }
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
        <Toaster />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
)
