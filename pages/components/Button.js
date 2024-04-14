'use client'
import React from 'react'
import { useTheme } from 'next-themes'
import { CiDark } from 'react-icons/ci'
import { MdDarkMode } from "react-icons/md";

const Button = () => {
    const { systemTheme, theme, setTheme } = useTheme('')
    const currentTheme = theme === 'system' ? systemTheme : theme

    return (
        <button
            onClick={() =>
                theme == 'dark' ? setTheme('light') : setTheme('dark')
            }
            
         className='bg-gray-400 rounded-md p-1'>
        {theme === 'dark' ? <MdDarkMode size={30}/>:<CiDark size={30}/>}
        </button>
    )
}

export default Button
