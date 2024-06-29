"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {

const [open, setOpen] = useState(false);

  return (
    <div className="">
        <Image src="/menu.png"
         alt="" width={28} 
         height={28} 
         className="cursor-pointer" 
         onClick={()=>setOpen((prev) => !prev)}
        />{
            open && (
                <div className="flex flex-col justify-center items-center gap-8 z-10 text-xl text-white absolute w-full bg-black left-0 top-20 h-[calc(100vh-80px)]">
                    <Link href="/">Homepage</Link>
                    <Link href="/">Shop</Link>
                    <Link href="/">Deals</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                    <Link href="/">Logout</Link>
                    <Link href="/">Cart(1)</Link>
                </div>
            )
        }
    </div>
  )
}

export default Menu