import React from "react";
import Tag from "./Tag";

// Define types for props
interface SolutionCardProps {
  industryTag: string;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  ctaTag: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  industryTag,
  title,
  description,
  features,
  benefits,
  ctaTag,
}) => {
  return (
    <main className="graybg xl:w-[1230px] lg:w-[100%] md:w-[85%] mx-auto border border-boxBorderColor rounded-[12px] lg:py-[52px] px-[21px] md:pt-[42px] md:px-[31px] pt-[32px]">
      <div className="flex flex-col">
        <Tag
          className="lg:h-[33px] flex items-center w-fit sm:px-[20px] py-[3px] px-[10px] sm:py-[6px] sm:text-[12px] text-[9px] h-auto"
          title={industryTag}
        />
        <div className="w-full flex justify-start">
          <h1 className="text-[16px] leading-[25px] md:text-[30px] lg:text-[32px] xl:text-[32px] pt-[16px] md:pt-[20px] lg:pt-[24px] xl:pt-[24px] md:leading-[50px] lg:leading-[60px] xl:leading-[64px] font-bold text-primary text-left">
            {title}
          </h1>
        </div>
        <p className="pt-[12px] w-full md:pt-[14px] lg:pt-[16px] xl:pt-[16px] font-[400] text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] leading-[22px] md:leading-[23px] lg:leading-[24px] xl:leading-[24px] text-secondary text-left">
          {description}
        </p>
        <Tag
          className="lg:mt-[32px] md:mt-[30px] mt-[22px] text-primary rounded-[6px] w-fit sm:h-[48px] flex items-center sm:px-[36px] px-[18px] py-[12px] sm:py-[12px] font-[600] sm:text-[12px] text-[9px] md:leading-[24px]"
          title={ctaTag}
        />
        <div className="lg:flex lg:gap-[100px]">
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
          <div>
            <h2 className="text-primary font-[600] text-[20px] leading-[30px] mb-[16px] mt-[32px]">Benefits:</h2>
            <ul className="ml-4">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="text-secondary text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] leading-[24px] md:leading-[16px] lg:leading-[20px] xl:leading-[20px] font-[400] list-disc mb-[10px] md:mb-[12px] lg:mb-[14px] xl:mb-[8px]"
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

export default SolutionCard;
