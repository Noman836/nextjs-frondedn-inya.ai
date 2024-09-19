import React from 'react'

interface TagProps {
    title: string;
}

const Tag = ({ title}: TagProps) => {
  return (
    <>
    <span className='rounded-[30px] border border-boxBorderColor bg-boxbgColor text-primary px-[20px] py-[6px]'>
       <h6 className='text-secondary font-[400] text-center leading-[21px]'>{title}</h6> 
    </span>
    </>
  )
}

export default Tag