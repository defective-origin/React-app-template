import React from 'react'
import ReactDOM from 'react-dom'

// components
import App from './screens/App/App'
import Launcher from './core/Launcher/Launcher'

// features
import reportWebVitals from './core/tools/reportWebVitals'

// assets
import './assets/styles/index.scss'

ReactDOM.render(
  <React.StrictMode>
    <Launcher>
      <App />
    </Launcher>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
