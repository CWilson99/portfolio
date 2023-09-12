import Logo from '@/components/logo'
import About from './about/about'
import Contact from './contact/contact'
import Experience from './experience/experience'
import Portfolio from './portfolio/portfolio'

export default function Home() {
  return (
    <main>
      <div className='flex py-12'>
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
          <div className='h-auto mt-16'>
            <Logo></Logo>
          </div>
        </div>
        <div className='w-48'></div>
      </div>
    </main>
  )
}