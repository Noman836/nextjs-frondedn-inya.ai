import React from 'react'

interface ResourceCardProps {
    className: string;
    imageClass:string;
    contentClass:string

  }

const ResourceCard: React.FC<ResourceCardProps> = ({
    className,
    imageClass,
    contentClass,
}) => {
    
  return (
    <>
    <main className={`xl:w-[33%] xl:h-[340px] rounded-[12px] flex flex-col ${className}`}>
        <div className={`h-[140px] ${imageClass}`}>

        </div>
        <div className={`px-[36px] py-[12px] ${contentClass}`}>
            <h1 className=''>ueyfeqyfyf;ouyfuqFUF</h1>
            <p className=''>liufiewufejicoiewjficfeoiwruficjfoiewJOICJHFEWC;OiHOIEHFOUHFOUWHFC</p>
            <div className='flex justify-between items-center'>
                <span className=''>iudafiquf</span>
                <span className=''>iheoiyfoiwhf</span>
            </div>
        </div>
    </main>
    </>
  )
}

export default ResourceCard