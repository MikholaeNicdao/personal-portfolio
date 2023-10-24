import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import { RiContactsLine } from 'react-icons/ri'

const SideBar = () => {
  return (
    <div className="fixed hidden translate-x-[0%] translate-y-[50%] md:flex">
        <ul className="text-white">
            <a href="https://www.linkedin.com/in/mikholae-baniaga-1a2ab8253/" target='_blank' className="w-full"><li className="w-[150px] bg-[#0072b1] py-4 px-2 flex justify-between items-center translate-x-[-60%] duration-300 ease-in-out hover:translate-x-[0]">LinkedIn <AiFillLinkedin className='mx-2' size={30} /></li></a>
            <a href="https://github.com/MikholaeNicdao" target='_blank' className="w-full"><li className="w-[150px] bg-slate-800 py-4 px-2 flex justify-between items-center translate-x-[-60%] duration-300 ease-in-out hover:translate-x-[0]">Github <AiFillGithub className='mx-2' size={30} /></li></a>
            <a href="#Contact" className="w-full"><li className="w-[150px] bg-[#90EE90] py-4 px-2 flex justify-between items-center translate-x-[-60%] duration-300 ease-in-out hover:translate-x-[0]">Email <AiOutlineMail className='mx-2' size={30} /></li></a>
            <a href="/Soft_Eng_Mikholae_Baniaga.pdf" target='_blank' className="w-full"><li className="w-[150px] bg-gray-500 py-4 px-2 flex justify-between items-center translate-x-[-60%] duration-300 ease-in-out hover:translate-x-[0]">Resume <RiContactsLine className='mx-2' size={30} /></li></a>
        </ul>  
    </div>
  )
}

export default SideBar