import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  weights: ['300', '400', '500', '600', '700'],
  variable: '--font-inter'
})

export const metadata = {
  title: 'Axis Imaging - Radiology that puts people first',
  description: 'Now accepting patients at our brand-new Mickleham clinic. Experience modern radiology with care that feels personal — and billing that\'s fully bulk billed.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}