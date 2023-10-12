import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineHome} from 'react-icons/ai'
import { MdOutlineWork } from 'react-icons/md'
import { BiSolidContact } from 'react-icons/bi'
import { BsPersonWorkspace } from 'react-icons/bs'

const NavBar = () => {
  const logo = <h1 className='font-bold text-lg text-[#FD4556] md:text-2xl'>DevMiks</h1>
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex w-full max-w-[800px] justify-between items-center m-auto p-5 text-[#000000]'>
      {logo}
      <nav className='hidden md:flex gap-11'>
        <a href='#Home' className='p-2 ease-out duration-200 hover:text-[#BD3944] hover:border-b-[1px] hover:border-[#BD3944]'>Home</a>
        <a href='#Work' className='p-2 ease-out duration-200 hover:text-[#BD3944] hover:border-b-[1px] hover:border-[#BD3944]'>Work</a>
        <a href='#Portfolio' className='p-2 ease-out duration-200 hover:text-[#BD3944] hover:border-b-[1px] hover:border-[#BD3944]'>Portfolio</a>
        <a href='#Contact' className='p-2 ease-out duration-200 hover:text-[#BD3944] hover:border-b-[1px] hover:border-[#BD3944]'>Contact</a>
      </nav>
      <div className='flex md:hidden' onClick={handleNav}>
        {!nav ? <AiOutlineMenu color="#53212B" /> : <AiOutlineClose color="#53212B" />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 h-full w-[30%] bg-[#BD3944] ease-in-out duration-700' : 'fixed left-[-100%]'}>
        <nav className='block text-[#FFFBF5]'>
          <ul className='p-5'>
            <li className='border-[#53212B] rounded-lg p-2 flex justify-center items-center bg-[#53212B]'><a href='#Home'><AiOutlineHome size={30} /></a></li>
            <li className='border-[#53212B] rounded-lg p-2 flex justify-center items-center bg-[#53212B] mt-10'><a href='#Work'><MdOutlineWork size={30}/></a></li>
            <li className='border-[#53212B] rounded-lg p-2 flex justify-center items-center bg-[#53212B] mt-3'><a href='#Portfolio'><BsPersonWorkspace size={30}/></a></li>
            <li className='border-[#53212B] rounded-lg p-2 flex justify-center items-center bg-[#53212B] mt-3'><a href='#Contact'><BiSolidContact size={30}/></a></li>
          </ul>
        </nav>
        <div className='rotate-[-90deg] relative bottom-[-30%] text-[#FFFBF5] text-2xl'>
          <h1>DevMiks</h1>
        </div>
      </div> 
    </div>
  )
}

export default NavBar