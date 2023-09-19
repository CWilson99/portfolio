"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { FaCircleHalfStroke } from 'react-icons/fa6';

type Props = {
  size?: number;
}

export default function ThemeSwitcher({size}: Props) {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();


    useEffect(() => {
      setMounted(true);
    }, []);


    if (!mounted) {
      return null;
    }

    function checkTheme(){
        console.log(theme)
        console.log(theme === "dark" ? "light" : "dark")
    }

    return (
        <FaCircleHalfStroke className="cursor-pointer" size={size ? size : 16} onClick={() => {
                checkTheme();
                setTheme(theme === "dark" ? "light" : "dark")
                }
             }/>
    )
  }
