import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='absolute'>
        <div className="integrations grid grid-cols-1 lg:grid-cols-2 gap-10 md:px-24 py-7 sm:px-28 py-7 lg:px-32 py-9 xl:px-32 py-9">
          <div className="text flex-col justify-start items-center">
            <h2>APP INTEGRATIONS</h2>
            <h1 className='xl:text-6xl md:text-3xl lg:text-4xl'>One platform, all</h1>
            <h1 className='xl:text-6xl md:text-3xl lg:text-4xl text-gray-500'>your work</h1>
            <p className='text-xl text-gray-500'>Consolidate your tools and data with worko, providing your team with a unified space for focused productivity</p>
          </div>
          <div className="img flex justify-center items-start">
            <img src="assests/react.svg" alt="not" />
          </div>
        </div>
      </section>

    </>
  )
}

export default App
