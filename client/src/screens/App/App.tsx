import React from 'react'
import { FormattedMessage } from 'react-intl'

// components
import Link from '../../components/Link/Link'
import Icon from '../../components/Icon/Icon'

// assets
import './App.scss'

export default function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <Icon type="logo" className="App-logo" alt="logo" />
        <p>
          <FormattedMessage
            id="app.text"
            defaultMessage="Edit <code>src/App.tsx as </code> and save to reload. {linebreak} Now with {what}!"
            description="Welcome header on app main page"
            values={{
              what: 'react-intl',
              linebreak: <br/>,
              code: (chunks: string) => <code>{chunks}</code>,
            }}
          />
        </p>
        <Link />
      </header>
    </div>
  )
}
