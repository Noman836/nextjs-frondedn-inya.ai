import React from "react";
import Image from "next/image";

interface ImageCardProps {
  backgroundImage: string;
  imageSrc?: string;
  imageSrc2?: string;
  title: string;
  description: string;
  className?: string;
  imageSrcStyle1?: string;
  imageSrcStyle2?: string;
  backgroundMainImage: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
  backgroundImage,
  imageSrc,
  imageSrc2,
  title,
  description,
  className = "",
  imageSrcStyle1 = "",
  imageSrcStyle2 = "",
  backgroundMainImage = "",
}) => {
  return (
    <main
      className={`border border-boxBorderColor flex flex-col justify-between rounded-[12px] relative overflow-hidden ${className} mx-[30px] h-auto sm:h-[400px] md:h-[450px] lg:h-[400px]`}
      style={{
        backgroundImage: `url(${backgroundMainImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="rounded-[12px] relative z-10 pb-[16px] sm:pb-[24px] md:pb-[32px]">
        <h1 className="text-primary font-bold xl:leading-[36px] text-[18px] sm:text-[20px] md:text-[24px] xl:text-[24px] lg:text-[28px] px-[16px] sm:px-[24px] md:px-[32px] pt-[16px] sm:pt-[24px] pb-[8px]">
          {title}
        </h1>
        <p className="text-secondary sm:h-[48px] font-[400] leading-[20px] text-[12px] xl:text-[16px] sm:text-[14px] md:text-[16px] lg:text-[18px] px-[16px] sm:px-[24px] md:px-[32px] pt-[8px]">
          {description}
        </p>
      </div>
      
      
      <div className="w-full flex-1 flex h-auto">
        
      <div className="grid grid-cols-2 ">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={title}
            width={300}
            height={300}
            className={`${imageSrcStyle1}`}
          />
        )}
        {imageSrc2 && (
          
          <Image
            src={imageSrc2}
            alt={title}
            width={300}
            height={207} // Adjusted to match your responsive height
            className={`${imageSrcStyle2}`} // Responsive height styles passed as props
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

export default ImageCard;
