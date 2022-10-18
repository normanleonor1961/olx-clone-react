import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import { ImHome3 }from 'react-icons/im'

export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  function pathMatchRoute(route){
    if(route === location.pathname){
      return true
    }
  }

  return (
    <div className='bg-red border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between px-3 max-w-6xl mx-auto'>
           <div className='flex items-center'>
              <ImHome3 size={50} className='fill-amber-300 cursor-pointer p-3 }'
              onClick={() => navigate('/')}
              />              
             <span className='text-xl text-amber-600 cursor-pointer p-3' onClick={() => navigate('/')}>Home Real Property</span>
           </div>  
           <div>
              <ul className='flex space-x-10 py-3'>
                  <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/") && "text-black border-b-red-500"}`}
                  onClick={() => navigate('/')}>Home</li>
                  <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/offers") && "text-black border-b-red-500"}`}
                  onClick={() => navigate('/offers')}>Offers</li>
                  <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/sign-in") && "text-black border-b-red-500"}`}
                  onClick={() => navigate('/sign-in')}>Sign in</li>
              </ul>
           </div>  
        </header>  
    </div>
  )
}
