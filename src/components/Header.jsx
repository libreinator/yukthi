import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Header() {
    return (
        <header className='flex flex-row sticky top-0 border-b border-gray z-10 bg-soothing_black text-white py-3 items-center justify-center w-full gap-12 text-lg font-ibm uppercase'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: .3
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1,
                }}
                className='hidden md:flex flex-row gap-12'>
                <Link className='hover:text-primary' href="/">Home</Link>
                <Link className='hover:text-primary' href="/">Events</Link>
                <Link className='hover:text-primary' href="/">Downloads</Link>
            </motion.div>
            <motion.div
                initial={{
                    y: -300,
                    opacity: 0,
                    scale: .5
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                    scale: 1.1,
                }}
                transition={{
                    delay: .8,
                    duration: .5,
                }}
                className='w-8 md:w-12' >
                <Link href="/"><img src="/Darpan.png" alt="Logo" /></Link>
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: .3
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1,
                }}

                className='hidden md:flex flex-row gap-12 items-center '>
                <Link className='hover:text-primary' href="/">Gallery</Link>
                <Link className='hover:text-primary' href="/">Contact</Link>
                <Link className='text-primary' href="/">Register</Link>
            </motion.div>
        </header>
    )
}