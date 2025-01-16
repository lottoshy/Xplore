import React from 'react'

const TestemonialsCard=({name, country, testimonial})=> {
  return (
    <div className='w-[20%] h-auto border border-black flex flex-col gap-8 rounded-2xl text-default p-7  text-left'>
        <p className='text-lg opacity-80'>{testimonial}</p>
        <span className='flex flex-row gap-4'>
            <img className='w-12 h-12 object-cover' src="https://framerusercontent.com/images/1g0mHLL1H9GNvUHaphR1M1nSPyQ.png" alt="" />
            <span>
                <p className='font-semibold'>{name}</p>
                <p>{country}</p>
            </span>
        </span>
    </div>
  )
}

export default TestemonialsCard