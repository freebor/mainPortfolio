import Link from "next/link"
import Menu from "./Menu"
import Image from "next/image"
import SearchBar from "./SearchBar"
import NavbarIcons from "./NavbarIcons"

export const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* MOBILE */}
      <div className="h-full flex justify-between items-center md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">LAMA</div>
        </Link>
        <Menu />
      </div>
      {/* LARGE */}
      <div className="hidden md:flex justify-center items-center gap-8 h-full">
        {/* left */}
        <div className="w-1/3">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="" height={24} width={24} />
            <div className="text-2xl tracking-wide">LAMA</div>
          </Link>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 flex items-center justify-between gap-8">
          <SearchBar />
          <NavbarIcons />
        </div>
      </div>
    </div>
  )
}
