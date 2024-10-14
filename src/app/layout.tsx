import Footer from '@/components/footer'
import Header from '@/components/header'
import '@/styles/globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body>
        <div className='container w-3/12 border border-gray-300	my-10 px-0 overflow-hidden min-h-[90vh] flex flex-col'>
          <Header />
          <div className='flex-grow'>
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
