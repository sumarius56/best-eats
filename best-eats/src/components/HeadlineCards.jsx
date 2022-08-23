import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>

     {/* Card */}
     <div className='rounded=xl relative'>
         {/* Overlay */}
       <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Snail's Out,BOGO's Out</p>
          <p className='px-2'>Trough 8/26</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
       </div>
     <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.unsplash.com/photo-1491211228054-b929a45b5537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='/' />
     </div>

     {/* Card */}
     <div className='rounded=xl relative'>
      {/* Overlay */}
      <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
       <p className='font-bold text-2xl px-2 pt-4'>Frog Legs, EXOTIC Food</p>
       <p className='px-2'>Trough 8/26</p>
       <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
      </div>
     <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://media.istockphoto.com/id/1366444014/ro/fotografie/plac%C4%83-cu-picioare-de-broasc%C4%83.webp?s=612x612&w=is&k=20&c=GYxveV43fJPNNI0yyh_GGzwwL5yJ15_VfzHTZC-W54k=' alt='/' />
     </div>

     {/* Card */}
     <div className='rounded=xl relative'>
      {/* Overlay */}
      <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
       <p className='font-bold text-2xl px-2 pt-4'> "Mãmãligã" with Cheese</p>
       <p className='px-2'>Trough 8/26</p>
       <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
      </div>
     <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://media.istockphoto.com/id/1328715828/ro/fotografie/m%C4%83m%C4%83liga-cu-br%C3%A2nz%C4%83-un-terci-din-f%C4%83in%C4%83-de-porumb-galben-tradi%C8%9Bional-%C3%AEn-rom%C3%A2nia-moldova-%C8%99i.webp?s=612x612&w=is&k=20&c=_j98FJEZVVrRi_MEGtesLjP42eEKwoC7xXoA4NzFsgQ=' alt='/' />
     </div>

     </div>
  )
}

export default HeadlineCards