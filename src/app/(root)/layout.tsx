import Navbar from '@/src/components/layout/navbar/navbar'
import Footer from '@/src/components/layout/footer/footer'

export default function RootGroupLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {/* Clears the fixed header */}
      <div className="pt-20 sm:pt-24">{children}</div>
      <Footer />
    </>
  )
}
