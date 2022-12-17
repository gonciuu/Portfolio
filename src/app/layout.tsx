import { Poppins } from '@next/font/google'
import '../styles/globals.css'

const inter = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={inter.className} lang="en">
      <body className="bg-mainBlue-100">{children}</body>
    </html>
  )
}
