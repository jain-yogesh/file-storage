import Image from 'next/image'
import React from 'react'

const Layout = ({children} : {children : React.ReactNode}) => {
  return (
    <div className="flex min-h-screen">
        <section className='bg-brand p-10 hidden w-1/2 items-center justify-center lg:flex xl:w-2/5'>
            <div className='flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12'>
                <div className='flex items-center text-center gap-x-5'>
                    <Image src={"/logo.png"} alt='Logo' width={81} height={82} className='h-auto' />
                    <span className='text-white text-5xl'>File Storage</span>
                </div>
                <div className='space-y-5 text-white'>
                    <h1 className='h1'>Manage your files the best way</h1>
                    <p className='body-1'>
                        Awesome, we&apos;ve created the perfect place for you to store all your documents.
                    </p>
                </div>
                <Image src={"/assets/images/files.png"} alt='Files' width={342} height={342} className='transition-all hover:rotate-2 hover:scale-105 cursor-pointer' />
            </div>
        </section>
        <section className='flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0'>
            <div className='mb-16 lg:hidden'>
                <div className='flex items-center text-center gap-x-5'>
                    <Image src={"/logo-brand.png"} alt='Logo' width={81} height={82} className='h-auto' />
                    <span className='text-brand text-3xl'>File Storage</span>
                </div>
            </div>
            {children}
        </section>
    </div>
  )
}

export default Layout
