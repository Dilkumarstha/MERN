import config from '@/config';
import React from 'react'

export const metadata = {
  title: "Contact",
  description: "Contact page for Dokan",
  keywords: "contact, support, help",
};

const ContactLayout = ({children}) => {
  return (
          <div className="flex flex-col items-center justify-center   px-4 space-y-8  m-10 ">

      <h1 className="text-2xl text-bg font-bold text-center w-full  bg-primary rounded-2xl p-5">
        Welcome to {config.appName}
      </h1>

       {children}

    </div>
  )
}

export default ContactLayout


