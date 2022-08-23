import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-orange-600  w-full h-20 m-auto flex justify-between items-center text-white text-xs  '>

      <div className='px-20 m-1'>
       <p className='p-1 '>Contact</p>
       <p className='p-1 '>About</p>
       <p className='p-1 '>Ideeas</p>
      </div>

       <div className='px-20 py-1 m-1'>
        <p className='p-1 '>Complaints</p>
        <p className='p-1 '>Meal of the day</p>
        <p className='p-1 '>Where are we located?</p>
       </div>

     <div className='px-20 py-1 m-1'>
      <p className='p-1 '>I want to eat ....</p>
      <p className='p-1 '>Discontinued Products </p>
      <p className='p-1 '>En gros orders</p>
     </div>


     <div className='px-20 py-1 m-1'>
      <p className='p-1 '>Have you tried the snails yet?</p>
      <p className='p-1 '>Future Discounts</p>
      <p className='p-1 '>Out of frog legs!</p>
     </div>


    </div>
  )
}

export default Footer