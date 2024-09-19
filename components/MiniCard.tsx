import React from "react";
import arrow from '../public/assets/cleo/arrow-right.png'
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  className?: string;
  buttonText?: string;
  buttonClassName?: string;
  descclasssName: string;
  titleStyle: string;
  showImage?: boolean;  
}

const MiniCard: React.FC<CardProps> = ({
  title,
  description,
  className = "border border-boxBorderColor rounded-[12px] w-[350px] ",
  buttonText = "Read More",
  buttonClassName = "text-primary cursor-pointer",
  descclasssName = '',
  titleStyle = "",
  showImage = true  
}) => {
  return (
    <main className={className}>
      <div className="pl-[32px] py-[32px] flex flex-col gap-[30px] items-stretch">
        <div className="">
          <h1 className={`text-primary font-bold leading-[36px] text-[16px] mb-2 ${titleStyle}`}>
            {title}
          </h1>
          <p className={`text-primary lg:w-[270px] w-full pr-5 font-[400] leading-[24px] text-[16px] ${descclasssName}`}>
            {description}
          </p>
        </div>
        <div className="">
          <button className={buttonClassName}>
            {buttonText} 
            {showImage && ( 
              <span className="flex">
                <Image src={arrow} alt="arrow Image" width={15.67} height={9.33} />
              </span>
            )}
          </button>
        </div>
      </div>
    </main>
  );
};

export default MiniCard;
