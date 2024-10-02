import React from 'react'

interface TagProps {
    title: string;
    className:string
}

const Tag = ({ title,className}: TagProps) => {
  return (
    <>
    <span className={`rounded-[30px] border border-boxBorderColor bg-boxbgColor text-primary sm:px-[20px] sm:py-[6px] px-[10px] py-[0px]${className}`}>
       <h6 className='text-primary sm:text-[14px] text-[9px] font-[400] text-center leading-[21px]'>{title}</h6> 
    </span>
    </>
  )
}

export default Tag