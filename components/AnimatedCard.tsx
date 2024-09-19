'use client';
import '../app/style/Card.css'
import { BorderBeam } from './magicui/border-beam';

interface AnimatedCardProps {
    title: string;
    description: string;
}

const AnimatedCard = ({ title, description }: AnimatedCardProps) => {
    return (
        <>
            <div className="animated-card p-10 w-[35%] h-[500px]  flex justify-center items-center flex-col gap-3 relative">
                <h1 className='w-[70%] text-center text-primary text-[40px] font-[700] leading-[50px]'>{title}</h1>
                <p className='text-center text-secondary text-[16px] font-[400] leading-[24px]'>{description}</p>
                <BorderBeam className='rounded-[10px]' />
            </div>
        </>
    );
}

export default AnimatedCard;
