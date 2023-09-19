"use client"
import { useScrollDirection } from "@/hooks/useScrollDirection";
import ThemeSwitcher from "./theme-switcher/theme-switcher"
import Logo from "@/components/logo/logo";
import { FaBars, FaCross, FaX, FaXmark } from "react-icons/fa6";
import { useState } from "react";

export default function Header() {
    const navs = [
        ["About", "about"],
        ["Experience", "experience"],
        ["Portoflio", "portfolio"],
        ["Contact", "contact"]
    ]
    const scrollDirection = useScrollDirection();
    const [navOpen, setNavOpen] = useState(false);

    function toggleNav() {
      const newVal = !navOpen;
      setNavOpen(newVal);
    }

    return (
        <div>
            <div className={`fixed w-screen top-0 bottom-0 z-[11] backdrop-blur ${navOpen ? "" : "hidden"}`} onClick={x => {toggleNav()}}>
            </div>
            <div className={`absolute top-0 bottom-0 right-0 w-64 z-[12] transform-x-0 bg-slate-100 dark:bg-slate-950 navigation ${navOpen ? "slide-in" : "slide-out"}`}>

            </div>
            <div className={`flex flex-row z-10 items-center h-[80px] md:h-[128px] w-full backdrop-blur-md bg-slate-50/50 dark:bg-slate-950/50 shadow-md fixed transition-[top] duration-500 ${ scrollDirection === "down" ? "-top-32" : "top-0"}`}>
                <div className="shrink relative left-8 top-0 fade-up opacity-0 -translate-x-8" style={{animationDelay: "3100ms"}}>
                    <a className={`flex flex-row scale-[65%] md:scale-100`} href="">
                        <Logo allowHover={true}></Logo>
                    </a>
                </div>
                <div className="flex grow"></div>
                <div className="hidden md:flex md:w-100 md:pe-4 justify-end me-4 fade-up opacity-0 -translate-x-8" style={{animationDelay: "3300ms"}}>
                    <ul className="flex flex-row">
                        {navs.map(nav => {
                            return (
                                <li key={nav[1]} className="pe-4 last:pe-0 transition-all duration-500 hover:-translate-y-1 hover:text-sky-500">
                                    <a href={`#${nav[1]}`}>
                                        {nav[0]}
                                    </a>
                                </li>
                            )
                        })}
                        <li className='flex items-center cursor-pointer'><ThemeSwitcher/></li>
                    </ul>
                </div>
                <div className="md:hidden pe-8 text-sky-500 cursor-pointer" onClick={x => {toggleNav()}}>
                    <FaBars size={24} />
                </div>
            </div>
        </div>
    )
  }
