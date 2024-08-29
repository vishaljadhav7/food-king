import React from 'react'

const SignUp = () => {
  const handleSubmit = (e) =>{
     e.preventDefault()
  }
  return (
    <div className='h-screen flex justify-center items-center bg-slate-300'>
    <form className='bg-white md:w-[400px] w-[90%] max-w-md h-auto p-6 flex flex-col justify-between shadow-lg rounded-lg'>
        <div className='flex flex-col gap-2 mb-4'>
            <label htmlFor="name" className='text-gray-700 font-semibold'>Name</label>
            <input type="text" placeholder='Your name' id="name" className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'/>
        </div> 

        <div className='flex flex-col gap-2 mb-4'>
            <label htmlFor="email" className='text-gray-700 font-semibold'>Email</label>
            <input type="text" placeholder='Your email' id="email" className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'/>
        </div>

        <div className='flex flex-col gap-2 mb-6'>
            <label htmlFor="passcode" className='text-gray-700 font-semibold'>Password</label>
            <input type="password" placeholder='Enter your password' id="passcode" className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'/>
        </div>  

        <button type='submit' onClick={handleSubmit} className='p-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition transform hover:scale-105'>Sign Up</button>
    </form>      
</div>

  )
}

export default SignUp