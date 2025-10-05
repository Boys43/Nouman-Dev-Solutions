"use client"
import { useState } from "react"
import { Menu } from "lucide-react"
import Sidebar from "../layout/Sidebar"

const HamBurger = () => {

    const [toggleHamburger, setToggleHamburger] = useState(false)

    return (
        <>
            {/* Hamburger Menu for small screens */}
            <div className="p-2 bg-[var(--accent)] fixed top-5 right-5 rounded-md shadow-2xl text-2xl z-50 cursor-pointer lg:hidden">
                <Menu onClick={() => setToggleHamburger(!toggleHamburger)} />
            </div>

            {/* Sidebar */}
            <div
                className={`
    fixed lg:sticky top-0 h-screen px-5 flex flex-col justify-center 
    bg-[var(--sidebar-bg)] transition-all z-40
    ${toggleHamburger ? "left-0" : "-left-full"} 
    lg:left-0 lg:w-[25%]
  `}
            >
                <Sidebar />
            </div>
        </>
    )
}

export default HamBurger;
