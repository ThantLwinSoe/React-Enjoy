import React, { useState } from 'react'
import {categories, mealData} from '../data/data'
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Meal() {

    const [foods,setFoods] = useState(mealData);
    const filterCat = (categories) => {
        setFoods( 
            mealData.filter(item => {
                return item.categories === categories
            } ))
    }

  return (
    <div className='max-w-[1520px] m-auto px-4] py-12'>
        <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>
            Our Meal
        </h1>
        <div className='flex flex-col lg:flex-row justify-center my-4'>
            <div className='flex justify-center md:justify-center'>
                <button onClick={() => filterCat(mealData)} className='m-1 w-[8rem] bg-orange-700 rounded-md border-orange-700 text-white 
                hover:bg-white hover:text-orange-700 hover:border-orange-700'>All</button>
                <button onClick={() => filterCat(pizza)} className='m-1  w-[8rem] rounded-md bg-orange-700 border-orange-700 text-white 
                hover:bg-white hover:text-orange-700 hover:border-orange-700'>Pizza</button>
                <button onClick={() => filterCat()} className='m-1 w-[8rem] rounded-md bg-orange-700 border-orange-700 text-white 
                hover:bg-white hover:text-orange-700 hover:border-orange-700'>Chicken</button>
                <button onClick={() => filterCat(sald)} className='m-1 w-[8rem] rounded-md bg-orange-700 border-orange-700 text-white 
                hover:bg-white hover:text-orange-700 hover:border-orange-700'>Sald</button>
            </div>
        </div>
        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4
        gap-6'>
            {
                foods.map( (item) => (
                    <div key={item.id} className='border-none hover:scale-105 duration-0-300
                    '>
                    <img src={item.image} alt={item.name}
                    className='w-full h-[200px] object-cover rounded-lg
                    ' />
                    <div className='flex justify-between py-2 px-4'>
                        <p className='bg-orange-700 h-18  w-18 rounded-full
                        -mt-10 text-white py-4 px-2 border-8'>Check</p>
                    </div>

                    <div className='pl-2 py-4'>
                        <span className='items-center text-indigo-600'>View More</span> <HiArrowNarrowRight className='w-5 ml-2 inline' size={25}></HiArrowNarrowRight>
                    </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
