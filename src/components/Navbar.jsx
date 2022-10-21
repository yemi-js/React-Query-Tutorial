import React from 'react'

const Navbar = ({setPage}) =>
{
  return (
    <nav className='bg-green-300 flex justify-center py-4 my-4 gap-4'>
      <button className='bg-slate-500 hover:bg-slate-400 h-auto w-auto p-4'
        onClick={() => { setPage("planets") }}>Planets</button>

      <button className='bg-slate-500 hover:bg-slate-400 h-auto w-auto p-4'
        onClick={() => { setPage("people") }}>People</button>
      
    </nav>
  )
}

export default Navbar