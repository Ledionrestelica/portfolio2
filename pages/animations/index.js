'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Animations() {
    const variants = {
        visible: { opacity: 1, x: 100, transition: { staggerChildren: 1 } },
        hidden: { opacity: 0 },
    }

    const items = ['item1', 'item2', 'item3', 'item4']
    return (
        <>
            <motion.ul animate="visible" variants={variants}>
                {items.map((item) => (
                    <motion.li variants={variants} key={item}>
                        {item}
                    </motion.li>
                ))}
            </motion.ul>
        </>
    )
}

export default Animations
