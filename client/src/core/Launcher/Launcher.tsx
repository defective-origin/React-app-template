import React, { Suspense } from 'react'
import { IntlProvider } from 'react-intl'
import { Provider } from 'react-redux'

// configs
import * as localeConfig from '../../locales'
import store from '../../store'

export interface ILauncherProps {
  children: React.ReactNode,
}

export default function Launcher(props: ILauncherProps): JSX.Element {
  const locale = localeConfig.getLocaleWithoutRegionCode()
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <IntlProvider
        locale={locale}
        defaultLocale={localeConfig.defaultLocale}
        messages={localeConfig.messages[locale]}
      >
        <Provider store={store}>
          { props.children }
        </Provider>
      </IntlProvider>
    </Suspense>
  )
}
