import { useState } from 'react'
import HeroImage from './assets/demo_image.png';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='relative'>
        <div className="integrations grid grid-cols-1 lg:grid-cols-2 gap-40 md:px-24 py-7 gap-20 sm:px-16 gap-20 py-7 lg:px-32 py-9 gap-20 xl:px-40 py-9 gap-20">
          <div className="text flex-col justify-start items-center">
            <h2>APP INTEGRATIONS</h2>
            <h1 className='xl:text-6xl md:text-3xl lg:text-4xl'>One platform, all</h1>
            <h1 className='xl:text-6xl md:text-3xl lg:text-4xl text-gray-500'>your work</h1>
            <p className='text-xl text-gray-500'>Consolidate your tools and data with worko, providing your team with a unified space for focused productivity</p>
          </div>
          <div className="img flex justify-center items-start">
            <img className='lg:mb-8 relative' src={HeroImage} alt="hero-image" />
          </div>
        </div>
      </section>

      <div className="communication flex justify-center items-center relative">
        <h1 className='relative'>Communication</h1>
      </div>

    </>
  )
}

export default App
