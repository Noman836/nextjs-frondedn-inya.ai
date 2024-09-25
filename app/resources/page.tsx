import Tag from '@/components/Tag'
import React from 'react'


const page = () => {
  return (
    <>
 <section className='container-fluid p-3'>
        <main className='container  w-full pt-[120px] md:pt-[100px] lg:pt-[195px]'>
            <div className='flex justify-center'>
                <Tag className='' title='Request'/>
            </div>
            <h1 className="lg:w-2/3 mx-auto w-full text-[24px] leading-[25px] md:text-[40px]  lg:text-[48px] xl:text-[50px] pt-[16px] md:pt-[20px] lg:pt-[24px] xl:pt-[24px] md:leading-[50px] lg:leading-[60px] xl:leading-[64px] font-bold text-primary text-center">
               Strengthening Your Cloud Security: Key Strategies for 2024
              </h1>

              <p className="w-[100%] lg:w-[55%] mx-auto pt-[12px] md:pt-[14px] lg:pt-[16px] xl:pt-[16px] font-[400] text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] leading-[22px] md:leading-[23px] lg:leading-[24px] xl:leading-[24px] text-primary text-center">
                Cleo is an intelligent AI-driven platform designed to enhance
                your cloud security posture.
              </p>
        </main>
        <section className='container xl:flex xl:flex-row lg:flex lg:flex-row md:flex md:flex-row flex flex-col gap-[30px] flex-wrap lg;my-[100px] md:my-[100px] xl:my-[100px] my-[30px]'>
           
        </section>
    </section>
    </>
  )
}

export default page