import React from 'react'

const About = () => {
  return (
    <div id='About' className='flex justify-center items-center bg-[#FFFBF5] w-full h-screen'>
        <div className='auto-cols-auto md:grid grid-cols-2 w-full h- h-full p-5 gap-10 justify-center items-center'>
            <div className='text-left pb-5 md:text-right'>
                <p className='border-b-2 border-[#FD4556] text-5xl font-bold'>About</p>
                <p className='text-3xl pt-5'>Hi. I’m Miks, nice to meet you. Please take a look around!</p>
            </div>
            <div>
                <p>I am passionate about building excellent software that improves the lives of those around me. I Specialise in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?</p>
            </div>
        </div>
    </div>
  )
}

export default About