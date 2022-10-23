import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import OAuth from './components/OAuth'

export default function ForgotPasswor() {
  const [email, setEmail] = useState ("")
  
  function onChange(e){
    setEmail(e.target.value)
    }

    async function onSubmit(e) {
      e.preventDefault()
      try {
        const auth = getAuth()
        await sendPasswordResetEmail(auth, email)
        toast.success("Email was sent")
      } catch (error) {
        toast.error("Could not send reset password")
      }

    }
    return (
      <section>
          <h1 className='text-3xl text-center mt-6 font-bold'>Forgot Password</h1>
          <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
            <div className='md:w-[67%] lg:w-[50%] mb-6 md:mb-6'>
            <img
            src="https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fHNlY3VyaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="key"
            className="w-full rounded-2xl"
          />'
            </div> 

            <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
              <form onSubmit={onSubmit}>
                  <input type="email" id='email' value={email} onChange={onChange} placeholder="Email address" className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6" />
                  
                  <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
                      <p className='mb-6'>Don't have an account?
                      <Link to="/sign-up" className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1'> Register</Link>
                      </p>
                      <p>
                      <Link to="/sign-in" className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out ml-1'>Sign In</Link>
                      </p>
                  </div>
                  <button 
                          className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercse rounded shawdow-md hover:shadow-lg bg-blue-700 transition duration-200 ease-in-out active:bg-blue-800'
                          type='submit'>Send reset password</button>
                    <div className='my-4 items-center flex before:border-t  before:flex-1  before:border-gray-300
                          after:border-t  after:flex-1  after:border-gray-300'>
                          <p className='text-center font-semibold mx-4'>OR</p>
                    </div>
                    <OAuth />
              </form>

            </div>          
          </div>
      </section>
  )
}

