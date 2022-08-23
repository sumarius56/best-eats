import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-orange-600 max-w-[1640px] w-full p-4  text-white grid grid-cols-2 sm:flex gap-6 justify-around items=center m-auto'>

      <div className='  '>
       <p className=' '>Contact</p>
       <p className=' '>About</p>
       <p className=' '>Ideeas</p>
      </div>

       <div className=' '>
        <p className=' '>Complaints</p>
        <p className=' '>Meal of the day</p>
        <p className=' '>Where are we located?</p>
       </div>

     <div className='  '>
      <p className=' '>I want to eat ....</p>
      <p className=' '>Discontinued Products </p>
      <p className=' '>En gros orders</p>
     </div>


     <div className=' '>
      <p className=' '>Tried the snails yet?</p>
      <p className=' '>Future Discounts</p>
      <p className=' '>Out of frog legs!</p>
     </div>


    </div>
  )
}

export default Footer