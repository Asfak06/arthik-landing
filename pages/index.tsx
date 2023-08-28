import Nav from '@/components/nav'

export default function Home() {
  return (
    <div className="bg-cover bg-center w-full h-[100vh] bg-[url('/assets/Header.svg')]" >
      <Nav />
      {/* Other components/content for the header will go here */}
    </div>
  )
}
