
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
      <>
          <div className='container mx-auto'>
          
              Home page
          </div>
        </>
    )
}
