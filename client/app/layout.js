import './globals.css'
import { DM_Sans, Red_Hat_Display } from 'next/font/google'

const dm_sans = DM_Sans({
        subsets: ['latin'],
        weight: ['700'],
        variable: '--font-dm-sans'
})
const red_hat_display = Red_Hat_Display({
        subsets: ['latin'],
        weight: ['300', '400', '500', '600'],
        variable: '--font-red-hat-display'
})


export const metadata = {
  title: 'Lively Application',
  description: 'Easily connect with your customers through the lively online chat.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dm_sans.variable} ${red_hat_display.variable}`}>
               <head>
                          <link rel='icon' href='/logo.png' sizes='any' />
               </head>
               <body>{children}</body>
    </html>
  )
}
