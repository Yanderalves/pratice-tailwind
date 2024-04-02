import Link from 'next/link'
import React from 'react'
import Button from './Button'
import Image from 'next/image'

export default function Header() {
  return (
    <header className='flex flex-row w-screen justify-around py-8 items-center'>
      <div>
        <Image alt='Icone do Site' width={110} src={'/icon.png'} height={16} />
      </div>
      <nav>
        <ul className='flex flex-row gap-8'>
          <li>
            <Link href={'/'}>Buy / Sell</Link>
          </li>
          <li>
            <Link href={'/'}>Grow</Link>
          </li>
          <li>
            <Link href={'/'}>Markets</Link>
          </li>
          <li>
            <Link href={'/'}>Business</Link>
          </li>
          <li>
            <Link href={'/'}>Support</Link>
          </li>
        </ul>
      </nav>
      <div>
        <ul className='flex gap-2'>
          <li>
            <Button color='normal'>Sign In</Button>
          </li>
          <li>
            <Button>Sign Up</Button>
          </li>
        </ul>
      </div>
    </header>
  )
}
