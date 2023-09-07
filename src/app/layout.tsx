import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Medux',
  description: 'Medux patient app'
}

// ** Styles imports
import 'react-datepicker/dist/react-datepicker.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient()

  return (
    <html lang='en' data-theme='light'>
      <QueryClientProvider client={queryClient}>
        <body className={inter.className}>{children}</body>
      </QueryClientProvider>
    </html>
  )
}
