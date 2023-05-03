import '@/styles/globals.scss'
import { ThemeProvider } from '../../components/ThemeContext'
import { ProgressProvider } from '../../components/ProgressContext';

export default function App({ Component, pageProps }) {
  return (
    <ProgressProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ProgressProvider>
  );
}
