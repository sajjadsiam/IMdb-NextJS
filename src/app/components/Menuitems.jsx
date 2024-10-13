import React from 'react'
import Link from 'next/link'

export default function Menuitems({title, address, Icon}) {
  return (
        // eslint-disable-next-line react/jsx-no-undef
        <Link href={address} className='hover:text-amber-500 '>
        <Icon className='text-2xl sm:hidden ' />
        <p className='uppercase hidden sm:inline text-sm'>{title}</p>
        </Link>
  )
}
