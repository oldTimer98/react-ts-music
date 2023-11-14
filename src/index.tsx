import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
//重置样式
import 'normalize.css'
import '@/assets/css/index.scss'
// import 'lib-flexible'
import { HashRouter } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
