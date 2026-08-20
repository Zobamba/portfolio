import Navbar from '@/src/components/layout/navbar/navbar'
import Footer from '@/src/components/layout/footer/footer'

export default function RootGroupLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
