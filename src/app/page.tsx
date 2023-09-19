"use client"
import { useEffect, useState } from "react";
import Logo from '@/components/logo/logo'
import About from './about/about'
import Contact from './contact/contact'
import Experience from './experience/experience'
import Portfolio from './portfolio/portfolio'
import Header from "./header/header";

export default function Home() {
  const [playAnimation, setPlayAnimation] = useState(true);

  // This will run one time after the component mounts
  // Set back to false once it's done
  useEffect(() => {
    const onPageLoad = () => {
      setPlayAnimation(true);
      const timer = setTimeout(() => {
        setPlayAnimation(false);
      }, 2500);
      return () => clearTimeout(timer);
    };

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  return (
    <main>
      <Header></Header>
      <div className="absolute left-0 top-0 w-full h-full shadow-md bg-slate-100 dark:bg-slate-950 z-20 animate-hide-splash">
        <div className={`absolute left-[50%] top-[50%] animate-hide-logo`}><Logo allowHover={false}></Logo></div>
      </div>
      { !playAnimation &&
        <div className={'flex flex-row pt-[80px] md:pt-[128px] pb-12 fade-up opacity-0 -translate-x-8 md:justify-center'} style={{animationDelay: "500ms"}}>
          <div className='flex flex-col w-full md:w-[70vw] md:justify-center'>
            <div className='flex h-[calc(100vh-128px)] px-8 md:px-48 items-center md:justify-center'>
              <About></About>
            </div>
            <div className='h-auto w-full mt-16 flex flex-col justify-center'>
              <div className="flex flex-row w-full justify-center pb-8 px-8 md:px-48">
                <div className="border-t-[1px] border-sky-500/50 w-48 h-0 self-center"></div>
                <div className="px-8 text-lg md:text-xl font-bold">{`Experience`}</div>
                <div className="border-t-[1px] border-sky-500/50 w-48 h-0 self-center"></div>
              </div>
              <Experience></Experience>
            </div>
            <div className='h-auto mt-16 md:mt-48 flex flex-col justify-center'>
              <div className="flex flex-row w-full justify-center pb-8 px-8 md:px-48">
                <div className="border-t-[1px] border-sky-500/50 w-48 h-0 self-center"></div>
                <div className="px-8 text-lg md:text-xl font-bold">{`Projects`}</div>
                <div className="border-t-[1px] border-sky-500/50 w-48 h-0 self-center"></div>
              </div>
              <Portfolio></Portfolio>
            </div>
            <div className='h-auto mt-16 md:mt-48 flex flex-col justify-center'>
              <div className="flex flex-row w-full justify-center pb-8 px-8 md:px-48">
                <div className="border-t-[1px] border-sky-500/50 w-16 h-0 self-center"></div>
                <div className="px-8 text-lg md:text-xl font-bold">{`Questions?`}</div>
                <div className="border-t-[1px] border-sky-500/50 w-16 h-0 self-center"></div>
              </div>
              <Contact></Contact>
            </div>
          </div>
        </div>
      }
    </main>
  )
}