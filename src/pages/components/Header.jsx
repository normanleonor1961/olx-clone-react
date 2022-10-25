import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { ImHome3 }from 'react-icons/im'

export default function Header() {
  const [pageState, setPageState]=useState("Sign in")
  const location = useLocation()
  const navigate = useNavigate()
  const auth = getAuth()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        setPageState("Profile")
      }else {
        setPageState("Sign in")
      }
    })
  })
  function pathMatchRoute(route){
    if(route === location.pathname){
      return true
    }
  }

  return (
     <div className="bg-blue-300 border-b shadow-sm sticky top-0 z-50">
        <header className='flex justify-between px-3 max-w-6xl mx-auto'>
           <div className='flex items-center'>
              <ImHome3 size={40} className='fill-orange-300 cursor-pointer  }'
              onClick={() => navigate('/')}
              />              
             <span className='text-xl font-semibold text-amber-600 cursor-pointer p-3' onClick={() => navigate('/')}>Home Real Property</span>
           </div>  
           <div>
              <ul className='flex space-x-10 py-3'>
                  <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/") && "text-black border-b-red-500"}`}
                  onClick={() => navigate('/')}>Home</li>
                  <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/offers") && "text-black border-b-red-500"}`}
                  onClick={() => navigate('/offers')}>Offers</li>
                  <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${(pathMatchRoute("/profile") || pathMatchRoute("/sign-in")) && "text-black border-b-red-500"}`}
                  onClick={() => navigate('/profile')}>{pageState}</li>
              </ul>
           </div>  
        </header>  
    </div>
  )
}
