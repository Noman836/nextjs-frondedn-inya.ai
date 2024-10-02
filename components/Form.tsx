import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

const Form = () => {
  return (
    <>
    <main className=''>
    <div className="flex justify-center">
        <Button className="text-[14px] hover:bg-boxbgColor mb-[30px] mt-[51px] font-[400] text-primary bg-boxbgColor border border-boxBorderColor  rounded-[30px]">
        Registration
          </Button>
        </div>  
        <h1 className='xl:w-[796px] text-center lg:w-[700px] w-full mx-auto text-primary sm:text-[40px] pb-[32px] sm:leading-[50px] text-[22px] leading-[35px] font-[700]'>
        Join the Future of Cloud Security: Get Early Access to Indya AI
            </h1> 
            <p className='xl:w-[558px] text-center lg:w-[558px] w-full mx-auto text-secondary text-[16px] pb-[38px] leading-[24px] font-[400]'>
            Be the first to experience advanced cloud security solutions. Get exclusive early access and updates.
            </p>
            <div className="xl:w-[486px] lg:w-[486px] w-full mx-auto">
            <form>
              <div>
                <label className="text-primary" htmlFor="">
                  Full Name
                </label>
                <Input
                  type="text"
                  placeholder="Enter full name"
                  className="mt-[8px] placeholder:text-secondary text-secondary rounded-[6px] bg-hoverBg px-[16px] py-[9px] border-none"
                />
              </div>
              <div className="my-[24px]">
                <label className="text-primary" htmlFor="">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="Enter Email Address"
                  className="mt-[8px] text-secondary rounded-[6px] bg-hoverBg px-[16px] py-[9px] placeholder:text-secondary border-none"
                />
              </div>
              <div className="mb-[32px]">
                <Button className="font-bold text-black bg-primary hover:bg-secondary rounded-[6px] px-[36px] py-[12px]">
                  Submit
                </Button>
              </div>
            </form>
            <div className='sm:flex sm:flex-row sm:gap-1 sm:leading-0 leading-[4px] flex flex-col '>
                <span className='text-[14px] pb-[32px] leading-[21px] font-[100] text-secondary'>Privacy Note:</span>
                <p className='text-[14px] pb-[32px] leading-[21px] font-[100] text-secondary sm:mt-0 mt-[-25px]'>We respect your privacy and will not share your information.</p>
            </div>
          </div>
    </main>
  
    </>
  )
}

export default Form