import React from 'react'

export default function () {
  return (
    <div className='bg-red-700 min-nh-screen'>
        <div className='m-auto w-[80%]'>
            <img src="/image.png" alt="" className='w-[100%] h-[100px]' />
            <div className='bg-black flex p-[4px] gap-6'>
                <p>home</p>
                <p>about us</p>
                <p>products</p>
                <p>contact us</p>
            </div>
            <div className='flex'>
                <div className='bg-green-700 w-[30%] h-[450px]'>left</div>
                <div className='bg-yellow-500 w-[70%] h-[450px]'>right</div>
            </div>
            <div className='bg-blue-900 h-[100px]'>footer</div>
        </div>
    </div>
  )
}
