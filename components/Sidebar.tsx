"use client";

import {navItems } from '@/constants'
import { cn } from '@/lib/utils';
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface myAppProps {
  fullName: string;
  avatar: string;
  email: string;
}

const Sidebar = ({fullName, avatar, email} : myAppProps) => {
    const pathname = usePathname();
  return (
    <aside className='sidebar'>
      <Link href={"/"} className='hidden lg:block'>
        <div className='flex items-center justify-center text-center gap-x-3'>
                    <Image src={"/logo-brand.png"} alt='Logo' width={51} height={52} className='h-auto' />
                    <span className='text-brand text-3xl'>File Storage</span>
                </div>
      </Link>

      <nav className='sidebar-nav'>
        <ul className='flex flex-1 flex-col gap-6'>
            {navItems.map(({url, name, icon}) => (
                <Link href={url} key={name} className='lg:w-full '>
                    <li className={cn("sidebar-nav-item", pathname === url && 'shad-active')}>
                        <Image src={icon} alt={name} width={24} height={24} className={cn("nav-icon", pathname === url && 'nav-icon-active')} />
                        <p className='hidden lg:block'>{name}</p>
                    </li>
                </Link>
            ))}
        </ul>
      </nav>

      <Image src={"/assets/images/files-2.png"} alt='logo' width={506} height={418} className='w-full' />

      <div className='sidebar-user-info'>
            <Image src={avatar} alt='Avatar' width={44} height={44} className='sidebar-user-avatar' />

            <div className='hidden lg:block'>
              <p className='subtitle-2 capitalize'>{fullName}</p>
              <p className='caption'>{email}</p>
            </div>
      </div>
    </aside>
  )
}

export default Sidebar
