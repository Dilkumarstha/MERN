'use client'
import navLinks from '@/constants/navlink'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavMenu = () => {
  const pathname = usePathname();
  console.log(pathname)
  return (
   <nav className='hidden md:flex gap-5'>
    {navLinks.map((navlink)=>{
      const isActive = pathname === navlink.route || navlink.route !== '/' && pathname.startsWith(navlink.route);
      return(
        <Link href={navlink.route} key={navlink.route} className={`text-gray-200 hover:text-secondary font-semibold ${isActive?'text-secondary':''}`}>
        {navlink.label}
        </Link>
      )
    })}
   </nav>
  )
}

export default NavMenu