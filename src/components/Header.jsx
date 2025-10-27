import React from 'react'
import Link from 'next/link'
import config from '@/config'
import Logo from './Logo'

import NavMenu from './NavMenu'
import { REGISTER_ROUTE } from '@/constants/routes'
const Header = () => {
  return (
    <header className="shadow-md shadow-primary-200/50 ">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">

        {/* Website Name */}
        <Logo />

        {/* Navigation */}
        <NavMenu />

        <div className="text-primary border-2 border-primary rounded-full px-4 py-2 hover:bg-primary hover:text-white transition duration-300">
        <Link href={REGISTER_ROUTE}>Sign Up</Link>
        </div>
      </div>
    </header>
  )
}

export default Header