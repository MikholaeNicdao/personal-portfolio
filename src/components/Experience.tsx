import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import NodeJs from '../assets/node.png'
import MongoDB from '../assets/mongo.png'
import GitHub from '../assets/github.png'
import ReactLogo from '../assets/react.png'
import TailWind from '../assets/tailwind.png'

const Experience = () => {
  return (
    <div id='Experience' className='w-full h-screen bg-[#ffedd1] text-slate-950'>
      <div className='p-10 md:p-20'>
        <p className='border-b-2 border-[#FD4556] text-5xl font-bold'>Experience</p>
        <p className='pt-5'>// These are the Technologies I've worked with</p>
      </div>
      <div className='z-0 grid grid-cols-2 mx-auto max-w-[900px] p-5 gap-10 text-white md:grid-cols-4'>
        <div className='mx-auto flex justify-center items-center drop-shadow-md text-center bg-[#FD4556] p-3 px-8 rounded-md hover:scale-110 duration-300'>
          <img className='w-10' src={HTML} alt='HTML5 Logo' />
          <p>HTML5</p>
        </div>
        <div className='mx-auto flex justify-center items-center drop-shadow-md text-center bg-[#FD4556] p-3 px-8 rounded-md hover:scale-110 duration-300'>
          <img className='w-10' src={CSS} alt='CSS3 Logo' />
          <p>CSS3</p>
        </div>
        <div className='mx-auto flex justify-center items-center drop-shadow-md text-center bg-[#FD4556] p-3 px-8 rounded-md hover:scale-110 duration-300'>
          <img className='w-10' src={JavaScript} alt='JavaScript Logo' />
          <p>JavaScript</p>
        </div>
        <div className='mx-auto flex justify-center items-center drop-shadow-md text-center bg-[#FD4556] p-3 px-8 rounded-md hover:scale-110 duration-300'>
          <img className='w-10' src={NodeJs} alt='NodeJs Logo' />
          <p>NodeJS</p>
        </div>
        <div className='mx-auto flex justify-center items-center drop-shadow-md text-center bg-[#FD4556] p-3 px-8 rounded-md hover:scale-110 duration-300'>
          <img className='w-10' src={MongoDB} alt='MongoDB Logo' />
          <p>MongoDB</p>
        </div>
        <div className='mx-auto flex justify-center items-center drop-shadow-md text-center bg-[#FD4556] p-3 px-8 rounded-md hover:scale-110 duration-300'>
          <img className='w-10' src={GitHub} alt='Github Logo' />
          <p>Github</p>
        </div>
        <div className='mx-auto flex justify-center items-center drop-shadow-md text-center bg-[#FD4556] p-3 px-8 rounded-md hover:scale-110 duration-300'>
          <img className='w-10' src={ReactLogo} alt='ReactJs Logo' />
          <p>ReactJs</p>
        </div>
        <div className='mx-auto flex justify-center items-center drop-shadow-md text-center bg-[#FD4556] p-3 px-8 rounded-md hover:scale-110 duration-300'>
          <img className='w-10' src={TailWind} alt='Tailwind Logo' />
          <p>Tailwind</p>
        </div>
      </div>
    </div>
  )
}

export default Experience