import HeroImage from './assets/demo_image.png';
import './App.css'

function App() {

  return (
    <>
      <div className='relative hero'>
        <div className="integrations grid grid-cols-1 lg:grid-cols-2 gap-40 justify-center md:px-24 py-7 gap-20 sm:px-16 gap-20 py-7 lg:px-32 py-9 gap-20 xl:px-40 py-9 gap-20">
          <div className="text flex flex-col justify-center items-start">
            <h2>APP INTEGRATIONS</h2>
            <h1 className='xl:text-6xl md:text-6xl lg:text-6xl sm:text-5xl'>One platform, all <span>
            <h3 className='xl:text-6xl md:text-6xl lg:text-6xl text-gray-500 sm:text-5xl'>your work.</h3></span></h1>
            <p className='text-xl text-gray-500 font-medium'>Consolidate your tools and data with worko, providing your team with a unified space for focused productivity</p>
          </div>
          <div className="img flex justify-center items-center">
            <div className="image-wrapper">
              <img className='lg:mb-8 h-20 w-20 relative hero-image' src={HeroImage} alt="hero-image" />
            </div>
          </div>
        </div>
      </div>
      <div className='tables'>
        <div className="communication flex justify-center items-center gap-40 flex-cols">
          <div className="communication-container flex flex-col">
            <h1 className='relative comm text-gray-400'>Communication</h1>
            <p className='text-xl text-gray-500 font-normal'>Seemlessly use your preferred tools for unified work, start to finish.</p>
            <div className='grid grid-cols-3 gap-4 gap-y-10 auto-cols-max tables-columns'>
                <div>01</div>
                <div>02</div>
                <div>03</div>
                <div>04</div>
                <div>05</div>
                <div>06</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
