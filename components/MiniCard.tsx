import React from "react";
import arrow from '../public/assets/cleo/arrow-right.png';
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  className?: string;
  buttonText?: string;
  buttonClassName?: string;
  descclasssName?: string;
  titleStyle?: string;
  showImage?: boolean;
  showButton?: boolean;  // New prop to conditionally show the button
}

const MiniCard: React.FC<CardProps> = ({
  title,
  description,
  className = "border border-boxBorderColor rounded-[12px] w-full sm:w-full md:w-[290px] h-auto lg:w-[290px] xl:w-[290px]",
  buttonText = "Read More",
  buttonClassName = "text-primary cursor-pointer flex items-center",
  descclasssName = '',
  titleStyle = "",
  showImage = true,
  showButton = true  // Default to true, so button is shown unless specified otherwise
}) => {
  return (
    <main className={className}>
      <div className="px-[16px] md:pl-[32px] py-[16px] md:py-[32px] flex flex-col gap-[20px] md:gap-[30px] items-stretch">
        <div className="">
          <h1 className={`text-primary font-bold text-[14px] md:text-[16px] leading-[22px] md:leading-[36px] pb-[8px] ${titleStyle}`}>
            {title}
          </h1>
          <p className={`text-secondary w-full font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] ${descclasssName}`}>
            {description}
          </p>
        </div>
        {/* Conditionally render the button div */}
        {showButton && (
          <div className="">
            <button className={buttonClassName}>
              {buttonText} 
              {showImage && (
                <span className="ml-2">
                  <Image src={arrow} alt="arrow Image" width={15.67} height={9.33} />
                </span>
              )}
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default MiniCard;
