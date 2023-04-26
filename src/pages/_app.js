import '@/styles/globals.scss'
import { ThemeProvider } from '../../components/ThemeContext'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
