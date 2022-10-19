import React, { useState } from 'react'
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
import { Link } from 'react-router-dom'
import OAuth from './components/OAuth'

export default function Signin() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState ({
    email: "",
    password: "",
  })
  const { email, password } = formData
  function onChange(e){
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }
  return (
      <section>
          <h1 className='text-3xl text-center mt-6 font-bold'>Sign In</h1>
          <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
            <div className='md:w-[67%] lg:w-[50%] mb-6 md:mb-6'>
            <img
            src="https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fHNlY3VyaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="key"
            className="w-full rounded-2xl"
          />'
            </div> 

            <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
              <form >
                  <input type="email" id='email' value={email} onChange={onChange} placeholder="Email address" className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out" />
                  <div className='relative mb-6'>
                  <input 
                    type={showPassword ? "text" : "password" }
                    id='password' 
                    value={password} 
                    onChange={onChange} 
                    placeholder="password" 
                    className="w-full px-4 py-2 text-xl mt-4 text-gray-700 bg-white border-gray-300 rounded transition ease-in-out" />
                   
                    {showPassword ? (
                      <AiFillEyeInvisible className="absolute right-3 top-7 text-xl
                      cursor-pointer" onClick={() => setShowPassword((prevState) => !prevState)}/>
                    ):(<AiFillEye className="absolute right-3 top-7 text-xl cursor-pointer" onClick={() => setShowPassword((prevState) => !prevState)}/>)} 
                  </div>
                  <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6'>
                      <p className=''>Don't have an account?
                      <Link to="/sign-up" className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1'> Register</Link>
                      </p>
                      <p>
                      <Link to="/forgot-password" className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out ml-1'>Forgot password?</Link>
                      </p>
                  </div>
                  <button 
                          className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercse rounded shawdow-md hover:shadow-lg bg-blue-700 transition duration-200 ease-in-out active:bg-blue-800'
                          type='submit'>Sign in</button>
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
