import '@styles/bootstrap.min.css'
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import '../i18n';

export function reportWebVitals(metric: NextWebVitalsMetric) {
  // console.log(metric)
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
