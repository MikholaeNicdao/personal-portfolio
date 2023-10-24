const Contact = () => {
  return (
    <div id="Contact" className="flex justify-center items-center w-full h-screen bg-[#BD3944]">
      <form action="https://getform.io/f/b7975177-7b1d-46e9-9b4a-66fd36ef2b82" method="post" className='flex flex-col max-w-[600px] w-full m-5 text-white'>
        <div className='pb-8'>
          <p className='text-5xl'>Contact</p>
          <p className='text-sm'>// Submit the form below or email me - mikholae.baniaga@gmail.com</p>
        </div>
        <input className='p-2 text-black' type="text" name="Name" placeholder="Name" />
        <input className='p-2 my-2 text-black' type="email" name="Email" placeholder="Email" />
        <textarea className='p-2 text-black' name="Message" placeholder="Message" cols={30} rows={10}></textarea>
        <button className='border border-[#ffffff] flex items-center mx-auto my-8 py-3 px-4 duration-300 ease-in-out hover:scale-110 hover:bg-white hover:text-[#141d21]' type="submit">Let's Collaborate!</button>
      </form>
    </div>
  )
}

export default Contact