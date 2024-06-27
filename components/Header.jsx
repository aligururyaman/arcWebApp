import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoMenu } from "react-icons/io5";

function Header() {
  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="xl:text-4xl text-xl font-semibold border-accent">
            Glam <span className="text-accent">Arc</span>hitecture Design<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Navbar buraya gelecek */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button variant="ghost" className="hover:text-accent transition-all">
              İletişim
            </Button>
          </Link>
        </div>

        {/* Dropdown Menu */}
        <div className="xl:hidden">
          <DropdownMenu >
            <DropdownMenuTrigger asChild>
              <IoMenu size={40} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-32">
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href="/about">
                    Hakkımızda
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/project">
                    Projeler
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/contact">
                    İletişim
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default Header
