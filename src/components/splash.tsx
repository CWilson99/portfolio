"use client"
import { useEffect, useState } from "react";

export default function Splash() {
    const [playAnimation, setPlayAnimation] = useState(false);

    // This will run one time after the component mounts
    useEffect(() => {
      const onPageLoad = () => {
        setPlayAnimation(true);
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
        <div className="absolute w-full h-full bg-black z-50">

        </div>
    )
}