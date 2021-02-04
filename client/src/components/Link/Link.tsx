import React from 'react'
import { FormattedMessage } from 'react-intl'

export default function Link(): JSX.Element {
  return (
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FormattedMessage
        id="app.learn-react-link"
        defaultMessage="Learn React"
        description="Link on react page"
      />
    </a>
  )
}
