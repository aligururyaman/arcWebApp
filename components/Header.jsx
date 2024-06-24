import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import Footer from "./Footer"

function Header() {
  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container mx-auto flex justify-between items-center ">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold  border-accent">Glam <span className="text-accent">Arc</span>hitecture Design<span className="text-accent">.</span></h1>
        </Link>

        {/* navbar buraya gelecek */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button variant="ghost" className='hover:text-accent transition-all'>İletişim</Button>
          </Link>

        </div>
        <div className="xl:hidden">
          Mobile Nav
        </div>
      </div>

    </header>

  )
}

export default Header