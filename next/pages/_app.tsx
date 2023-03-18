import '@styles/bootstrap.min.css'
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import '../i18n';
import { SessionProvider } from "next-auth/react"

export function reportWebVitals(metric: NextWebVitalsMetric) {
  // console.log(metric)
}

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
        <Component {...pageProps} />
    </SessionProvider>
  )
}
