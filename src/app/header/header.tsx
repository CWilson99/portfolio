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
      <div className={`flex flex-row z-50 items-center h-[128px] backdrop-blur-md bg-slate-50/50 dark:bg-slate-950/50 shadow-md sticky transition-[top] duration-500 ${ scrollDirection === "down" ? "-top-32" : "top-0"}`}>
        <div className="shrink relative left-8 top-0 fade-up opacity-0 -translate-x-8" style={{animationDelay: "3100ms"}}>
            <a className=" flex flex-row" href="">
                <Logo allowHover={true}></Logo>
            </a>
        </div>
        <div className="flex grow"></div>
        <div className="flex w-100 justify-end pe-4 fade-up opacity-0 -translate-x-8" style={{animationDelay: "3300ms"}}>
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
