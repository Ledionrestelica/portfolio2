import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from './Button'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'

const Navigation = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    const [isHydrating, setHydrationStatus] = useState(true)
    useEffect(() => {
        setHydrationStatus(false)
    }, [])
    if (isHydrating) {
        return <></>
    }

    const closeNav = () => {
        setNav(false)
    }

    return (
        <div className="w-full flex justify-between px-4  mx-auto h-24  bg-transparent relative">
            <div className="text-4xl flex-1 items-center flex text-costumDark dark:text-[#ffffff]">Ledionres</div>
            <div className="flex justify-around items-center text-md gap-6">
                <div className="flex-1 justify-around items-center gap-10 px-6 hidden md:flex">
                    <Link className='hover:scale-125 transition-all ease-in-out' href="/">Home</Link>
                    <Link className='hover:scale-125 transition-all ease-in-out' href="/about">About</Link>
                    <Link className='hover:scale-125 transition-all ease-in-out' href="/business">Business</Link>
                </div>

                <Button />
                <div onClick={handleNav} className="cursor-pointer md:hidden">
                    {nav ? (
                        <IoMdClose size={30} />
                    ) : (
                        <RxHamburgerMenu size={30} />
                    )}
                </div>
                <div
                    className={
                        nav
                            ? 'flex flex-col gap-6 absolute top-20 left-0 right-0  bg-white p-4  justify-start w-[90%] mx-auto text-lg border border-costumDark dark:border-[#ffffff] transition-all ease-in-out duration-500 dark:bg-costumDark md:hidden'
                            : 'flex-col gap-6 hidden absolute top-20 left-0 right-0  bg-white p-4  justify-start w-[100%] text-lg dark:bg-[#121212]'
                    }
                >
                    <Link className='border-b-2 pb-4 border-[#cecece] dark:border-white' onClick={closeNav} href="/">
                        Home
                    </Link>
                    <Link className='border-b-2 pb-4 border-[#cecece] dark:border-white' onClick={closeNav} href="/about">
                        About
                    </Link>
                    <Link className='border-b-2 pb-4 border-[#cecece] dark:border-white' onClick={closeNav} href="/business">
                        Business
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navigation
