import React from 'react'
import Tag from './Tag'

interface VerticalCardProps {
  title: string;
  description: string;
  tag1: string;
  tag2: string;
  features: string[];
  benefits: string[];
  backgroundImage: string;
  tagClass:string;
}

const VerticalCard: React.FC<VerticalCardProps> = ({
  title,
  description,
  tag1,
  tag2,
  features,
  benefits,
  backgroundImage,
  tagClass
}) => {
  return (
    <main
      className="lg:w-1/2 w-full container border border-boxBorderColor rounded-[12px] lg:px-[51px] lg:py-[52px] px-[21px] md:pt-[42px] md:px-[31px] pt-[32px] mb-[10px]"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}
    >
      <div className="flex flex-col">
        {/* First Tag */}
        <Tag
          className={`lg:h-[33px] justify-center flex items-center text-center w-full h-auto ${tagClass}`}
          title={tag1}
        />

        {/* Title */}
        <div className="w-full flex justify-start">
          <h1 className="text-[16px] leading-[25px] md:text-[30px] lg:text-[32px] xl:text-[32px] pt-[16px] md:pt-[20px] lg:pt-[24px] xl:pt-[24px] md:leading-[48px] lg:leading-[48px] xl:leading-[48px] font-bold text-primary text-left">
            {title}
          </h1>
        </div>

        {/* Description */}
        <p className="pt-[12px] md:pt-[14px] lg:pt-[16px] xl:pt-[16px] font-[400] text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] leading-[22px] md:leading-[23px] lg:leading-[24px] xl:leading-[24px] text-primary text-left">
          {description}
        </p>

        {/* Second Tag */}
        <Tag
          className="lg:w-[376px] lg:mt-[32px] md:mt-[30px] mt-[22px] rounded-[6px] lg:h-[48px] w-full text-center h-auto flex items-center justify-center px-[36px] py-[12px] font-[600] lg:text-[14px] text-[10px] leading-[24px]"
          title={tag2}
        />

        {/* Features */}
        <div className="lg:flex flex-col">
          <div>
            <h2 className="text-primary font-[600] text-[20px] leading-[30px] mb-[16px] mt-[32px]">Features:</h2>
            <ul className="ml-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="text-secondary text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] leading-[24px] md:leading-[16px] lg:leading-[20px] xl:leading-[20px] font-[400] list-disc mb-[10px] md:mb-[12px] lg:mb-[14px] xl:mb-[8px]"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h2 className="text-primary font-[600] text-[20px] leading-[30px] mb-[16px] mt-[32px]">Benefits:</h2>
            <ul className="ml-4">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="text-secondary text-[10px] md:text-[12px] lg:text-[12px] xl:text-[13px] leading-[20px] md:leading-[14px] lg:leading-[20px] xl:leading-[20px] font-[400] list-disc mb-[10px] md:mb-[12px] lg:mb-[14px] xl:mb-[8px]"
                >
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VerticalCard;
