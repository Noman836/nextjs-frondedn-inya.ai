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
      className={`border border-boxBorderColor rounded-[12px] relative overflow-hidden ${className} w-full h-[400px] md:w-full lg:w-full xl:w-[822] md:h-[400px] lg:h-[447px] xl:h-[494px]`}
      style={{
        backgroundImage: `url(${backgroundMainImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="rounded-[12px] relative z-10 pb-[32px]">
        <h1 className="text-primary font-bold leading-[36px] text-[20px] md:text-[22px] lg:text-[24px] px-[32px] pt-[32px] pb-[8px]">
          {title}
        </h1>
        <p className="text-secondary font-[400] leading-[24px] text-[14px] md:text-[15px] lg:text-[16px] px-[32px] pt-[8px]">
          {description}
        </p>
      </div>
      <div className="w-full flex justify-center overflow-hidden">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={title}
            width={550}
            height={568}
            className={`${imageSrcStyle1}`}
          />
        )}
        {imageSrc2 && (
          <Image
            src={imageSrc2}
            alt={title}
            width={550}
            height={250}
            className={`${imageSrcStyle2}`}
          />
        )}
      </div>
      <div
        className="absolute inset-0 z-0 bg-cover bg-center rounded-[12px]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
    </main>
  );
};

export default ImageCard;
