import React from 'react'

export default function IngredientCard({ingredient}) {
    const { text, weight, foodCategory, image}= ingredient;
    return (
        <div className=' rounded-2xl mb-12  pt-6 bg-white '>
            <img src={image} alt="img" className='rounded-2xl m-auto' />
            <div className="bg-white  pb-2 px-4 pt-3 text-black text-center rounded-2xl mb-6 font-semibold  pl-3 font-cardHeader text-2xl ">
                <h2>{text}</h2>
                <h2>weight: {weight} gr</h2>
                <h2>category: {foodCategory}</h2>
            </div>
        </div>
    )
}
