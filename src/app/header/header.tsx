"use client"
import { useScrollDirection } from "@/hooks/useScrollDirection";
import ThemeSwitcher from "./theme-switcher/theme-switcher"
import Image from 'next/image'
import Logo from "@/components/logo/logo";

export default function Header() {
    const navs = [
        ["About", "about"],
        ["Experience", "experience"],
        ["Portoflio", "portfolio"],
        ["Contact", "contact"]
    ]
    const scrollDirection = useScrollDirection();
    return (
      <div className={`flex flex-row items-center h-32 backdrop-blur-md bg-white/50 dark:bg-slate-950/50 shadow-md sticky transition-all duration-500 ${ scrollDirection === "down" ? "-top-32" : "top-0"}`}>
        <div className="flex-1 ps-8">
            <a className=" flex flex-row" href="">
                <Logo></Logo>
            </a>
        </div>
        <div className="flex w-100 justify-end pe-4">
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
      </div>
    )
  }
