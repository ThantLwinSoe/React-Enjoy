import React from 'react'
import {FaFacebookSquare,FaDribbbleSquare,FaGithubSquare,FaInstagram,FaTwitterSquare} from 'react-icons/fa'

export default function Footers() {
  return (
    <div>
        <div className='max-w-[1520px] m-auto px-4
        py-2 bg-[#24262b]'>
            <div className='py-16 px-4 grid lg:grid-cols-3
            gap-8 text-gray-300'>
                <h1 className='w-full text-3xl font-bold text-orange-500'>
                    Yum Eat
                </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, mollitia quae! Molestias fugit possimus provident ullam nihil autem, necessitatibus quod veritatis quam laborum. Atque veritatis id, incidunt itaque velit magni.

                </p>
                <div className='flex justify-between 
                md:w-[75%] my-6'>
                    <FaFacebookSquare size={30}></FaFacebookSquare>
                    <FaInstagram size={30}></FaInstagram>
                    <FaTwitterSquare size={30}></FaTwitterSquare>
                    <FaGithubSquare size={30}></FaGithubSquare>
                    <FaDribbbleSquare size={30}></FaDribbbleSquare>
                </div>
            </div>
            <div className='lg:col-span-2 flex
            justify-between mt-6'>
                <div>
                    <h6 className='font-medium 
                    text-[#9b9b9b]'>Location</h6>
                    <ul>
                        <li className='py-2 text-sm'>New York</li>
                        <li className='py-2 text-sm'>USA</li>
                        <li className='py-2 text-sm'>India</li>
                        <li className='py-2 text-sm'>Canada</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium 
                    text-[#bba1a1]'>Location</h6>
                    <ul>
                        <li className='py-2 text-sm'>New York</li>
                        <li className='py-2 text-sm'>USA</li>
                        <li className='py-2 text-sm'>India</li>
                        <li className='py-2 text-sm'>Canada</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium 
                    text-[#b99696]'>Location</h6>
                    <ul>
                        <li className='py-2 text-sm'>New York</li>
                        <li className='py-2 text-sm'>USA</li>
                        <li className='py-2 text-sm'>India</li>
                        <li className='py-2 text-sm'>Canada</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium 
                    text-[#d5b9b9]'>Location</h6>
                    <ul>
                        <li className='py-2 text-sm'>New York</li>
                        <li className='py-2 text-sm'>USA</li>
                        <li className='py-2 text-sm'>India</li>
                        <li className='py-2 text-sm'>Canada</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
