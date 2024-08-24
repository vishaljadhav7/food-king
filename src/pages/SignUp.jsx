import React from 'react'

const SignUp = () => {
  const handleSubmit = (e) =>{
     e.preventDefault()
  }
  return (
    <div className=' h-[87.3%] flex justify-center items-center'>
          <form className='bg-fuchsia-400 md:w-[320px] w-full  h-[60%] flex flex-col justify-between p-4 shadow-2xl shadow-stone-500 rounded-lg'>
              <div className='flex flex-col gap-1'>
                  <label htmlFor="name">Name</label>
                  <input type="text" placeholder='your name' id="name" className='p-2'/>
              </div> 

              <div className='flex flex-col gap-1'>
                 <label htmlFor="email">Email</label>
                 <input type="text" placeholder='your email' id="email" className='p-2'/>
              </div>
 
               <div className='flex flex-col gap-1'>
                 <label htmlFor="passcode">Password</label>
                 <input type="password" placeholder='enter your password' id="passcode" className='p-2'/>
              </div>  

              <button type='submit' onClick={handleSubmit} className='p-2 w-28 rounded-2xl bg-indigo-600 text-white hover:scale-110'>Sign Up</button>
          </form>      
    </div>
  )
}

export default SignUp