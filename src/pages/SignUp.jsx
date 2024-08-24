import React from 'react'

const SignUp = () => {
  const handleSubmit = (e) =>{
     e.preventDefault()
  }
  return (
    <div>
          <form>
              <div className=''>
                  <label htmlFor="name">Name</label>
                  <input type="text" placeholder='your name' id="name"/>
              </div> 

              <div>
                 <label htmlFor="email">Email</label>
                 <input type="text" placeholder='your email' id="email"/>
              </div>
 
               <div>
                 <label htmlFor="passcode">Email</label>
                 <input type="password" placeholder='enter your password' id="passcode"/>
              </div>  

              <button type='submit' onClick={handleSubmit}>Sign Up</button>
          </form>      
    </div>
  )
}

export default SignUp