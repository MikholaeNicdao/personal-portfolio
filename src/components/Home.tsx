import { AiOutlineArrowRight } from 'react-icons/ai'

const Home = () => {
  return (
    <div id="Home" className='flex justify-center items-center w-full h-screen'>
        <div className='max-w-[750px] p-2 mx-2'>
            <p className='text-[#BD3944]'>Hi my name is</p>
            <p className='text-3xl md:text-5xl pt-2'>Mikholae Baniaga</p>
            <p className='text-3xl md:text-5xl pt-1'>I'm a Full Stack Developer</p>
            <p className='text-sm pt-1 md:text-base'>I'm a full-stack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building responsive full-stack web applications.</p>
            <a href='#Portfolio' className='animate-bounce border border-[#FD4556] max-w-[150px] p-2 mt-5 flex justify-between items-center duration-300 ease-in-out hover:scale-125 hover:text-white hover:bg-[#BD3944]'>View Work <AiOutlineArrowRight /></a>
        </div>
        <img src="/home_logo.png" alt="Logo" className='w-96 hidden md:flex' />
    </div>
  )
}

export default Home