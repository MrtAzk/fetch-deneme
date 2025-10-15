import React from 'react'

const Coffee = ({id,title,description,image}) => {

  return (
    <div className='max-w-lg mx-auto flex flex-col items-center justify-center  border-2 m-5 p-4 rounded-xl'>
        <img className='w-80 h-80 ' src={image} alt="" />
        <section className=' flex flex-col items-center justify-center text-center'>
            <h2 className='text-red-600'>Title</h2>
            <h2  >{title}</h2>
            <span className='text-red-600'>Description</span>
            <span >{description}</span>

        </section>
    </div>
  )
}

export default Coffee
