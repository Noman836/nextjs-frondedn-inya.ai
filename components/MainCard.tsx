import React from "react";
import Image from "next/image";

interface MainCardProps {
  backgroundImage: string;
  imageSrc?: string;
  imageSrc2?: string;
  title: string;
  description: string;
  className?: string;
  imageSrcStyle1?: string;
  imageSrcStyle2?: string;
  backgroundMainImage: string;
  imageBox:string;
}

const MainCard: React.FC<MainCardProps> = ({
  backgroundImage,
  imageSrc,
  imageSrc2,
  title,
  description,
  className = "",
  imageSrcStyle1 = "",
  imageSrcStyle2 = "",
  backgroundMainImage = "",
  imageBox = ""
}) => {
  return (
    <main
      className="border border-boxBorderColor rounded-[12px] relative overflow-hidden w-full]">
      <div className="p-3 rounded-[12px] relative z-10 mb-2">
        <h1 className="text-primary font-bold leading-[36px] text-[20px] md:text-[22px] lg:text-[24px] pt-5">
          {title}
        </h1>
        <p className="text-primary font-[400] leading-[24px] text-[14px] md:text-[15px] lg:text-[16px] pt-3">
          {description}
        </p>
      </div>
      <div className={`${imageBox}`}
        style={{
          backgroundImage: `url(${backgroundMainImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
      <div className={`w-full flex lg:justify-center pl-2 pr-2 overflow-hidden ${className}`}>
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={title}
            width={980}
            height={136}
            className={`${imageSrcStyle1}`}
          />
        )}
        {imageSrc2 && (
          <Image
            src={imageSrc2}
            alt={title}
            width={200}
            height={300}
            className={`${imageSrcStyle2}`}
          />
        )}
      </div>
      </div>
      <div
        className="absolute inset-0 z-0 bg-cover bg-center rounded-[12px]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
    </main>
  );
};

export default MainCard;
