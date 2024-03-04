import React from 'react'

export default function NewsLetters() {
  return (
    <div>
        <div className='mzx-w-[1520px] m-auto text-white
        px-4 bg-[#24262b]'>
            <div className='mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h1>Need advice on how to improve your flow?</h1>
                    <p>Sign up to join our newsletters and stay up to date</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col
                    sm:flex-row items-center
                    justify-between w-full'>
                        <input placeholder='email'
                         className='p-3 flex w-full rounded-md
                          text-black' type="text" />
                          <button className='bg-[#00df9a] text-white
                          rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3                            border-none'>Notify Me</button>
                    </div>
                    <p>We are concerned about security of your data, Read("")\
                        <span className='text-[#00df9a] '>Privacy Policy</span>
                    </p>
                </div>
                <hr className='my-8 bg-gray-200 border-1 ' />
            </div>

        </div>
    </div>
  )
}
