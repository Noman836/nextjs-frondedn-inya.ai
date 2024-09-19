'use client';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface CardProps {
    iconClass: string;
    title: string;
    backgroundImage: string | StaticImageData; 
}

const Card = ({ iconClass, title, backgroundImage }: CardProps) => {
    return (
        <div 
            className="w-[75%] h-[500px] flex justify-center items-center flex-col gap-3 relative" 
        >
            <Image
                src={backgroundImage} 
                alt={title}
                layout="fill"
                objectFit="cover"
                quality={100}
                className="absolute top-0 left-0 z-0 rounded-[10px]"
            />
            <div className="z-10 text-center text-primary">
                <i className={iconClass}></i>
                <h1 className="text-[40px] font-[700] leading-[50px]">{title}</h1>
            </div>
        </div>
    );
};

export default Card;
