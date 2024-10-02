import Image from "next/image";
import "../app/style/RealTime.css";
import RealTime from "../public/assets/cleo/mask1.png";
import cis from '../public/assets/4.png';
import iso from '../public/assets/5.png';
import gdpr from '../public/assets/cleo/gdpr.png'
import mask2 from  '../public/assets/cleo/1.png'
import iso2 from '../public/assets/cleo/row1.png'
import rowa from '../public/assets/cleo/rowa.png'
import rowb from '../public/assets/cleo/rowb.png'
import rowc from '../public/assets/cleo/rowc.png'
import rowd from '../public/assets/cleo/rowd.png'

const SectionLayout = () => {
  return (
    <div className="xl:w-[1248px] lg:w-[1248px] mx-auto p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-[31px] lg:mt-[56px] md:mt-[40px] mt-[35px] lg:pb-[101px] md:pb-[101px]">
   
    <div className="rounded-[12px] border border-boxBorderColor flex items-left lg:h-[530px] flex-col col-span-1 lg:col-span-2 row-span-2 ">
      <div className="p-[32px]">
        <h2 className="text-[24px] leading-[36px] font-bold text-primary pb-[8px]">
          Multi-Cloud Environment Support
        </h2>
        <h3 className="text-secondary text-[16px] leading-[24px] w-full">
          Seamlessly manage and secure resources across multiple cloud providers, including AWS, Azure, and GCP.
        </h3>
      </div>
      <div className="overflow-hidden srealtime-img rounded-[12px]">
        <Image
          src={RealTime}
          alt="Contact Us Image"
          width={820}
          height={395}
          className="realtime_image w-full"
        ></Image>
      </div>
    </div>
  
 
    <div className="integrated-dashboard rounded-[12px] border border-boxBorderColor  row-span-5 lg:h-[782px] md:h-[782px] md:w-full h-[700px] flex-col xl:p-[32px] lg:p-[32px] md:p-[32px] p-3 flex items-start overflow-hidden">
      <h2 className="text-[24px] leading-[36px] font-bold text-primary pb-[8px]">Compliance Management</h2>
      <p className="text-secondary text-[16px] leading-[24px] w-full pb-[76px]">
        Simplify your compliance journey with Cleo&apos;s <br /> automated monitoring and reporting tools. Ensure adherence to industry standards like GDPR, HIPAA, PCI DSS, and SOC 2.
      </p>
      <div className="flex justify-center w-full relative mt-3">
        <Image src={cis} alt="Contact Us Image" width={250} height={184} className="realtime_image" />
        <div className="cpu-usage flex justify-center w-full absolute top-[70px]">
          <Image src={iso2} alt="Contact Us Image" width={300} className="realtime_image" />
        </div>
        <div className="cpu-usage flex justify-center w-full absolute top-[150px]">
          <Image src={iso} alt="Contact Us Image" width={350} className="realtime_image" />
        </div>
        <div className="flex justify-center w-full absolute top-[250px] ">
          <Image src={gdpr} alt="Contact Us Image" width={400} height={200} className="realtime_image" />
        </div>
      </div>
    </div>
  
    
    <div className="integrated-dashboard rounded-[12px] border border-boxBorderColor row-span-4 lg:h-[766px] md:h-[750px] h-[700px] flex-col xl:p-[32px] lg:p-[32px] md:p-[32px] p-3  flex items-start overflow-hidden">
      <h2 className="text-[24px] leading-[36px] font-bold text-primary pb-[8px]">
        Continuous Learning and <br /> Adaptation
      </h2>
      <p className="text-secondary text-[16px]  leading-[24px] w-full pb-[100px] lg:w-[85%]">
        Cleo&apos;s AI-driven algorithms continuously learn from new data and evolving threat landscapes, adapting to provide.
      </p>
      <div className="flex justify-center w-full relative">
        <Image src={rowa} alt="Contact Us Image" width={250} height={184} className="realtime_image" />
        <div className="cpu-usage flex  justify-center w-full absolute top-[130px]">
          <Image src={rowb} alt="Contact Us Image" width={300} className="realtime_image" />
        </div>
        <div className="cpu-usage flex justify-center w-full absolute top-[200px]">
          <Image src={rowc} alt="Contact Us Image" width={350} className="realtime_image" />
        </div>
        <div className="flex  justify-center w-full absolute top-[320px]">
          <Image src={rowd} alt="Contact Us Image" width={400} height={200} className="realtime_image" />
        </div>
      </div>
    </div>
  
 
    <div className="rounded-[12px] border border-boxBorderColor row-span-2 h-[219px] min-h-full p-[32px]">
      <h1 className="text-primary font-[700] text-[24px] leading-[36px] pb-[8px]">Natural Language Interface</h1>
      <p className="text-secondary font-[400] text-[16px] leading-[24px] lg:w-[80%] md:w-[80%] w-full">
        Interact with Cleo using natural language commands. Cleo&apos;s intuitive interface understands and responds to your queries.
      </p>
    </div>
  

    <div className="rounded-[12px] border border-boxBorderColor lg:mt-[-515px]  flex items-left lg:h-[516px] flex-col col-span-1 lg:col-span-2 row-span-2">
      <div className="p-[32px]">
        <h2 className="text-[24px] leading-[36px] font-bold text-primary pb-[8px]">Visualization and Reporting</h2>
        <h3 className="text-secondary text-[16px] leading-[24px] w-full pb-[8px] lg:w-[87%] md:w-[87%]">
          From detailed dashboards to comprehensive reports, Cleo provides the data you need to make informed decisions and effectively communicate security metrics to stakeholders.
        </h3>
      </div>
      <div className="overflow-hidden srealtime-img rounded-[10px]">
        <Image src={mask2} alt="Contact Us Image" width={820} height={395} className="realtime_image w-full" />
      </div>
    </div>
  </div>
  
  );
};
export default SectionLayout;
