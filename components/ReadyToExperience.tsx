import React from 'react';
import { Button } from './ui/button';
import '../app/style/solutions.css';

interface ImageCardProps {
  backgroundImage: string;
  headingName: string;
  descName: string;
  name: string;
  desc: string;
  contactSalesText?: string; // Optional prop for Contact Sales button text
  demoText?: string; // Optional prop for Request a Demo button text
  showExploreSolutions?: boolean; // Optional prop to show the Explore Solutions link
}

const ReadyToExperience: React.FC<ImageCardProps> = ({
  backgroundImage,
  headingName,
  descName,
  name,
  desc,
  contactSalesText,
  demoText,
  showExploreSolutions
}) => {
  return (
    <main className='xl:w-[1248px] md:w-[85%] mx-auto lg:w-[95%] justify-center w-full mb-3 rounded-[12px] border border-boxBorderColor sm:pb-[81px]'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize:'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='shadow2 p-3'>
        <h1 className={`lg:w-[600px] z-20 mx-auto text-center text-primary lg:text-[40px] text-[24px] font-[700] leading-[30px] lg:leading-[50px] pt-[81px] ${headingName}`}>
          {name}
        </h1>
        <p className={`lg:w-[650px] xl:w-[625px] md:w-[500px] z-20 w-full mx-auto text-center text-secondary text-[16px] font-[400] leading-[24px] pt-[16px] ${descName}`}>
          {desc}
        </p>

        <div className='mt-[32px] flex flex-col sm:flex-row sm:justify-center sm:items-center gap-2'>
          {/* Render Contact Sales button only if contactSalesText is provided */}
          {contactSalesText && (
            <Button variant="outline" className="bg-primary hover:bg-secondary text-[16px] font-[600] h-[48px] leading-[24px] rounded-[6px] px-[27px] py-[12px] text-black hover:text-black">
              {contactSalesText}
            </Button>
          )}
          {/* Render Request a Demo button only if demoText is provided */}
          {demoText && (
            <Button variant="outline" className="bg-black border-boxBorderColor rounded-[6px] px-[27px] h-[52px] py-[12px] text-[16px] font-[600] leading-[24px] text-primary hover:bg-black hover:text-primary hover:bg-opacity-80">
              {demoText}
            </Button>
          )}
        </div>

        {/* Render Explore Our Solutions only if showExploreSolutions is true */}
        {showExploreSolutions && (
          <div className='flex justify-center pt-[22px] text-primary'>
            <h5 className='text-[16px] leading-[24px] font-[600] text-primary underline-custom mx-auto'>
              Explore Our Solutions
            </h5>
          </div>
        )}
      </div>
    </main>
  );
}

export default ReadyToExperience;
