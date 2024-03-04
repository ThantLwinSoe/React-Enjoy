import React from 'react'

export const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <h3 className='text-orange-500 font-bold text-2xl text-center'>
            Quick Delivery App
        </h3>
        <div className='w-[1400px] mx-auto grid md:grid-cols-2'>
            <img src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp" alt="" 
            className='w-[550px] mx-auto my-4'/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>Get The App</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                    limitless Convenience on-demand
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatibus suscipit quisquam quas blanditiis cum placeat sunt facere, omnis esse dolore officiis enim commodi non autem ex! Illum, non nisi.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium aliquid tempora quod, eaque commodi, ut quia quidem, maxime voluptatibus reiciendis magni soluta veritatis nobis in. Earum labore accusamus rerum voluptas?
                </p>
                <button className='bg-black text-[#00df9a] rounded-md 
                font-medium my-6 mx-auto md:mx-0 py-3 w-[200px]'>Get Started</button>
            </div>
        </div>
    </div>
  )
}
