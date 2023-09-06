import About from './about/about'
import Experience from './experience/experience'

export default function Home() {
  return (
    <main>
      <div className='flex py-12'>
        <div className='w-48'></div>
        <div className='flex-1 flex flex-col'>
          <div className='flex h-screen items-center -mt-32'>
            <About></About>
          </div>
          <div className='h-auto pt-8'>
            <Experience></Experience>
          </div>
        </div>
        <div className='w-48'></div>
      </div>
    </main>
  )
}