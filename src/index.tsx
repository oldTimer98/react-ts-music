import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
//重置样式
import 'normalize.css'
import '@/assets/css/index.scss'
// import 'lib-flexible'
import App from '@/App'
import store from '@/store'
import theme from '@/assets/theme'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>
)
