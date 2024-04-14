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

    const closeNav = () =>{
      setNav(false)
    }


    return (
        <div className="w-full flex justify-between px-4 mx-auto h-20 bg-transparent">
            <div className="text-=lg text-6xl flex-1 items-center flex">LR</div>
            <div className="flex justify-around items-center text-md gap-6">
                <div className="flex-1 justify-around items-center gap-10 px-6 hidden md:flex">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/business">Business</Link>
                </div>

                <Button />
                <div onClick={handleNav} className="md:hidden">
                    {nav ? (
                        <IoMdClose size={30} />
                    ) : (
                        <RxHamburgerMenu size={30} />
                    )}
                </div>
                <div
                    className={
                        nav
                            ? 'flex flex-col gap-6 fixed top-0 left-0 bg-white  h-[60%] justify-start w-[300px] text-lg transition-all ease-in-out dark:bg-black'
                            : 'fixed left-[-100%] transition-all ease-in-out '
                    }
                >
                    <Link onClick={closeNav} href="/">Home</Link>
                    <Link onClick={closeNav} href="/about">About</Link>
                    <Link onClick={closeNav} href="/business">Business</Link>
                </div>
            </div>
        </div>
    )
}

export default Navigation
