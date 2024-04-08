import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light dark:text-light sm:text-base'>
        <Layout className='py-8 flex items-center justify-between md:flex-col lg:py-6'>
            <span>{new Date().getFullYear()} &copy; All right Reserved.</span>
            <div className='flex items-center md:py-2'>
                Build With<span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>by&nbsp;<Link href="https://pratiksingh27.github.io/codehacx/" target={"_blank"} className='underline underline-offset-2'>CodeHacX</Link>
            </div>
            <Link href="https://pratiksingh27.github.io/codehacx/" target={"_blank"} className='underline underline-offset-2'>Say hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer
