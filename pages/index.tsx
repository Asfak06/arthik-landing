import Benefits from '@/components/benefits'
import Clients from '@/components/clients'
import Contact from '@/components/contact'
import Download from '@/components/download'
import Footer from '@/components/footer'
import HeaderMid from '@/components/headerMid'
import Nav from '@/components/nav'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center bg-cover bg-center w-[1920px] min-w-full max-w-full h-[800px] mx-auto bg-[url('/assets/Header-bg.svg')]" >
        <Nav />
        <div className="flex justify-start items-center h-full ml-[20%]">
          <HeaderMid/>
        </div>
      </div>
      <Benefits/>
        <Clients/>
        <Testimonials/>
        <Download/>
        <Contact/>
        <Footer/>
    </>
  )
}
