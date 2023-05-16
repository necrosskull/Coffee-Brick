import './globals.css'
import {Inter} from 'next/font/google'
import {Montserrat} from 'next/font/google'

const inter = Inter({subsets: ['latin'], display: 'swap'})
const montserrat = Montserrat({subsets: ['latin'], display: 'swap', variable: '--font-montserrat'});

export default function RootLayout({children}) {
    return (
        <html lang="en" className={`${montserrat.variable}`}>
        <body className={montserrat.className}>{children}</body>
        </html>
    )
}
