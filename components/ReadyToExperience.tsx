import React from 'react'
import { Button } from './ui/button';

interface ImageCardProps {
    backgroundImage: string;
  }
  const ReadyToExperience: React.FC<ImageCardProps> = ({
    backgroundImage,
  }) => {
  return (
    <>
    <main className='container mb-3 rounded-[12px] pb-[81px] h-auto'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat:'no-repeat'
      }}
    >
        <h1 className='text-center text-primary text-[40px] font-[700] leading-[50px] pt-[81px]'>Ready to Experience Cleo?</h1>
        <p className='w-2/3 mx-auto text-center text-primary text-[16px] font-[400] leading-[24px] pt-[16px]'>Discover how Cleo can transform your cloud security and management strategy. Whether <br />you&apos;re looking to enhance visibility, optimize costs, or ensure compliance, Cleo is your <br /> ultimate AI-powered companion.</p>
        <div className='mt-[32px] flex justify-center items-center gap-2'>
        <Button variant="outline" className="bg-secondary  border-boxBorderColor rounded-[6px] px-[27px] py-[16px] text-black hover:text-black">Try Cleo now</Button>
          <Button variant="outline" className="bg-black border-boxBorderColor rounded-[6px] px-[27px] py-[16px] text-primary hover:text-white">Request a demo</Button>

        </div>
    </main>
    </>
  )
}

export default ReadyToExperience