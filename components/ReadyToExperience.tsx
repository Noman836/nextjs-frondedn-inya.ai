import React from 'react'
import { Button } from './ui/button';
import '../app/style/solutions.css'
interface ImageCardProps {
    backgroundImage: string;
    headingName:string;
    descName:string;
    name:string;
    desc:string;
  }
  const ReadyToExperience: React.FC<ImageCardProps> = ({
    backgroundImage,
    headingName,
    descName,
    name,
    desc
  }) => {
  return (
    <>
    <main className='container mb-3 rounded-[12px] border border-boxBorderColor pb-[81px] '
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat:'no-repeat'
      }}
    >
      <div className='shadow2'>
        <h1 className={`lg:w-1/2 z-20 mx-auto text-center text-primary lg:text-[40px] text-[24px] font-[700] leading-[30px] lg:leading-[50px] pt-[81px] ${headingName}`}>{name}</h1>
        <p className={`lg:w-2/3 z-20 w-full mx-auto text-center text-primary text-[16px] font-[400] leading-[24px] pt-[16px] ${descName}`}>{desc}</p>
        <div className='mt-[32px] flex justify-center items-center gap-2'>
        <Button variant="outline" className="bg-secondary  border-boxBorderColor rounded-[6px] px-[27px] py-[16px] text-black hover:text-black">Try Cleo now</Button>
          <Button variant="outline" className="bg-black border-boxBorderColor rounded-[6px] px-[27px] py-[16px] text-primary hover:text-black">Request a demo</Button>

        </div>
        </div>
    </main>
    </>
  )
}

export default ReadyToExperience