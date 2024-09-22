import Image from 'next/image'
import React from 'react'
import imageSrc from '../public/assets/solutions/profilelogo.png';
import profile from '../public/assets/solutions/profilepic.png'
import content from '../public/assets/solutions/content2.png'
import content1 from '../public/assets/solutions/content1.png'
import imageSrc2 from '../public/assets/solutions/framepic.png'
import { Button } from './ui/button';
const ProfileCard = () => {
  return (
    <>
    <main className='container'>
    <div className="flex flex-col items-center gap-3 lg:pt-[100px] pb-10">
          <h2 className="text-primary text-center font-bold lg:text-[40px] md:text-[30px] text-[24px] leading-[50px]">
          What Our Customers Say
          </h2>
        </div>
        <div className='lg:flex lg:flex-row md:flex gap-[30px] md:flex-row flex flex-col lg:mt-[56px] md:mt-[56px] mt-[26px]'>
            <div className='lg:w-1/2  lg:h-[250px] md:h-[250px] h-auto border border-boxBorderColor rounded-[12px] p-5'>
            <div className='w-full flex justify-between items-center'>
              <div className='flex  justify-start items-center gap-3'>
              <Image
                  src={profile}
                  alt="mobile image"
                  width={100}
                  height={100}
                />
                 <div className='flex flex-col gap-[4px]'>
                <h2 className='text-primary font-[700] text-[16px] leading-[24px]'>John Doe</h2>
                <p className='text-secondary font-[400] text-[14px] leading-[21px]'>Chief Information Security Officer</p>
              </div>
              </div>
             
              <div>
              <Image
                  src={imageSrc}
                  alt="mobile image"
                  width={85}
                  height={47}
                />
              </div>
            </div>
            <div className='mt-[16px]'>
              <Image
                  src={content}
                  alt="mobile image"
                  width={529}
                  height={94}
                />
              </div>
            </div>
            <div className='lg:w-1/2 lg:h-[250px] md:h-[250px] h-auto border border-boxBorderColor rounded-[12px] p-5'>
            <div className='w-full flex justify-between items-center'>
              <div className='flex  justify-start items-center gap-3'>
              <Image
                  src={profile}
                  alt="mobile image"
                  width={100}
                  height={100}
                />
                 <div className='flex flex-col gap-[4px]'>
                <h2 className='text-primary font-[700] text-[16px] leading-[24px]'>John Doe</h2>
                <p className='text-secondary font-[400] text-[14px] leading-[21px]'>Chief Information Security Officer</p>
              </div>
              </div>
             
              <div>
              <Image
                  src={imageSrc2}
                  alt="mobile image"
                  width={85}
                  height={47}
                />
              </div>
            </div>
            <div className='mt-[16px]'>
              <Image
                  src={content1}
                  alt="mobile image"
                  width={529}
                  height={94}
                />
              </div>
            </div>
        </div>
        <div className='flex justify-center items-center '>
          <Button className='px-[36px] py-[12px] rounded-[6px] bg-primary text-black text-[16px] font-[600] leading-[24px] lg:mt-[68px] md:mt-[60px] mt-[30px]'>Read More Customer Stories</Button>
        </div>
    </main>
    </>
  )
}

export default ProfileCard