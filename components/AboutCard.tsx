import Image from "next/image";
import React from "react";
import { StaticImageData } from 'next/image';

// Define the interface for the props
interface AboutCardProps {
  imageSrc: StaticImageData; // Use StaticImageData for Next.js Image imports
  imageAlt: string;
  title: string;
  description: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  imageClassName?: string;
  cardWidth?: string;   // Dynamically set card width
  cardHeight?: string;  // Dynamically set card height
}

const AboutCard: React.FC<AboutCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  className = "border border-boxBorderColor flex flex-col gap-[16px]",
  titleClassName = "font-[700] text-[20px] leading-[30px] text-primary",
  descriptionClassName = "font-[400] text-[16px] leading-[24px] text-secondary",
  imageClassName = "h-[250px]",
  cardWidth = "w-[290px]",
  cardHeight = "h-[278px]",
}) => {
  return (
    <main className={`${cardWidth} ${cardHeight} sm:p-[32px] p-[30px] rounded-[12px] ${className}`}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={46}
        height={39}
        className={imageClassName}
      />
      <h1 className={titleClassName}>{title}</h1>
      <p className={descriptionClassName}>{description}</p>
    </main>
  );
};

export default AboutCard;
