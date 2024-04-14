import './styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Navigation from './components/Navigation'

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider attribute="class">
            <Navigation />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
