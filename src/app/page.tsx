"use client"
import { useEffect, useState } from "react";
import Logo from '@/components/logo/logo'
import About from './about/about'
import Contact from './contact/contact'
import Experience from './experience/experience'
import Portfolio from './portfolio/portfolio'

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
      <div className="absolute left-0 top-0 w-full h-full bg-white shadow-md dark:bg-slate-950 z-50 animate-hide-splash">
        <div className={`absolute left-[50%] top-[50%] animate-hide-logo`}><Logo allowHover={false}></Logo></div>
      </div>
      { !playAnimation &&
        <div className='flex py-12 fade-up opacity-0 -translate-x-8' style={{animationDelay: "500ms"}}>
          <div className='w-48'></div>
          <div className='flex-1 flex flex-col'>
            <div className='flex h-screen items-center -mt-32'>
              <About></About>
            </div>
            <div className='h-auto mt-16'>
              <Experience></Experience>
            </div>
            <div className='h-auto mt-16'>
              <Portfolio></Portfolio>
            </div>
            <div className='h-auto mt-16'>
              <Contact></Contact>
            </div>
          </div>
          <div className='w-48'></div>
        </div>
      }
    </main>
  )
}