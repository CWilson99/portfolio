"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { FaCircleHalfStroke } from 'react-icons/fa6';

export default function ThemeSwitcher() {
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
        <FaCircleHalfStroke className="cursor-pointer" onClick={() => {
                checkTheme();
                setTheme(theme === "dark" ? "light" : "dark")
                }
             }/>
    )
  }
