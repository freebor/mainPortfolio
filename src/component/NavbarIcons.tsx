"use client"

import Image from "next/image"
import { useState } from "react"

const NavbarIcons = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <div className="flex items-center gap-4 xl:gap-6 ">
        <Image src='/profile.png' alt="" height={22} width={22} className="cursor-pointer" />
        <Image src='/notification.png' alt="" height={22} width={22} className="cursor-pointer" />
        <Image src='/cart.png' alt="" height={22} width={22} className="cursor-pointer" />
    </div>
  )
}

export default NavbarIcons