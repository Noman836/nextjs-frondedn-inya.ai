"use client";
import Image from "next/image";
import "../app/style/Home.css";
import HeroLogo from "../public/assets/logo1.png";
import banner from "../public/assets/banner.png";
import Group from "../public/assets/group.png";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import RealTime from "../public/assets/Mask group (1).png";
import cis from "../public/assets/4.png";
import iso from "../public/assets/5.png";
import gdpr from "../public/assets/cleo/gdpr.png";
import pattern from "../public/assets/lines.png";
import iso2 from "../public/assets/cleo/row1.png";
import ImageCard from "@/components/ImageCard";
import Form from "@/components/Form";
import Paid from "@/components/Paid";
import TalkToUs from "@/components/TalkToUs";

export default function Home() {
  const [activeButton, setActiveButton] = useState("Claims Processing");
  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };
  return (
    <section className="hero-section w-full">
      <div className="frame ">
        <div className="flex justify-center flex-col items-center ">
          <div
            className="masklogo flex justify-center xl:w-[692.18px] lg:mt-[60px] md:mt-[60px] mt-[30px] zoom-in-0
           lg:w-[692px]"
          >
            <Image src={HeroLogo} alt="Contact Us Image" />
          </div>
          <div className="">
            <h3 className="border border-boxBorderColor text-secondary sm:text-[14px] text-[10px] sm:leading-[21px] leading-[15px] font-[400] bg-boxbgColor text-center sm:px-[20px] px-[10px] py-[4px] sm:py-[8px] rounded-[20px]">
              Transform Cloud Security with Cleo&apos;s Advanced AI
            </h3>
          </div>
          <div className="w-full px-[20px] xl:w-[76%] lg:w-[82%] md:w-[90%] sm:w-[90%] mx-auto py-[24px]">
            <h2 className="mx-auto text-center xl:text-[120px] lg:text-[100px] md:text-[68px] sm:text-[54px] text-[32px]  xl:leading-[120px] lg:leading-[110px] md:leading-[90px] sm:leading-[70px] leading-[40px] font-[700] text-primary">
              AI-Driven Cloud Security, Reimagined
            </h2>
          </div>

          <div className="w-full mx-auto">
            <h3 className="xl:w-[725px] lg:w-[700px] md:w-[550px] sm:w-[500px] px-[30px] text-center font-[400] xl:text-[24px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-secondary mx-auto">
              Empowering Businesses with Next-Gen Threat Detection, Seamless
              Compliance, and Intelligent Optimisation.
            </h3>
          </div>

          <div className="pt-[44px] mb-[44px]">
            <Button className="bg-primary h-[48px] rounded-[6px] px-[36px] py-[12px] text-[16px] leading-[24px] font-[600] text-black hover:bg-secondary">
              Get Early Access
            </Button>
          </div>
        </div>
      </div>
      <div className="curve-image p-[20px]">
        <div className="w-full flex flex-col items-center justify-center md:px-[30px] ">
          <div className="flex  justify-center my-[82px] w-full">
            <Image src={banner} alt="Contact Us Image" />
          </div>
          <div className="xl:w-[1248px] heromask  lg:w-[92%] w-full border border-boxBorderColor rounded-[10px] flex flex-col items-center">
            <Button className="w-[95px] h-[33px] text-[14px] mb-[30px] mt-[51px] font-[400] text-primary bg-boxbgColor border border-boxBorderColor rounded-[30px] hover:bg-boxbgColor">
              Feature
            </Button>
            <h3 className="xl:w-[670px] lg:[670px]  md:w-[670px] mx-auto w-full text-center sm:text-[40px]  text-[22px] font-[700] sm:leading-[50px] leading-[35px] text-primary">
              Comprehensive Cloud Security Management Solutions
            </h3>
            <h2 className="xl:w-[558px] lg:w-[558px] md:w-[558px] pb-[56px] pt-[16px] mx-auto w-[90%] text-center font-[400] leading-[19px] sm:leading-[24px] sm:text-[16px] text-[14px] text-secondary">
              Real-time threat detection, automated compliance checks, and
              robust data encryption for your cloud environment.
            </h2>
            <div className="px-[30px] pb-[30px]">
              <Image src={Group} alt="Contact Us Image" />
            </div>
            <div className="xl:flex-row xl:flex lg:flex flex flex-col lg:flex-row lg:px-[30px] mb-[30px] justify-between items-center text-primary w-full">
              <button
                className={`${
                  activeButton === "Claims Processing"
                    ? "bg-tabColor bg-opacity-[80%] text-primary"
                    : "bg-none"
                } px-[30px] rounded-[12px] pt-[10px] pb-[10px] xl:w-[340px] lg:w-[340px] text-[18px] font-[500] leading-[27px] focus:outline-none`}
                onClick={() => handleButtonClick("claims")}
              >
                Claims Processing
              </button>

              <button
                className={`${
                  activeButton === "order"
                    ? "bg-tabColor bg-opacity-[80%] hover:bg-none text-primary"
                    : "bg-none"
                } px-[30px] rounded-[12px] pt-[10px] pb-[10px] xl:w-[340px] lg:w-[340px] text-[18px] font-[500] leading-[27px] focus:outline-none`}
                onClick={() => handleButtonClick("order")}
              >
                Order Processing
              </button>

              <button
                className={`${
                  activeButton === "customer"
                    ? "bg-tabColor bg-opacity-[80%] text-primary"
                    : "bg-none"
                } px-[30px] rounded-[12px] pt-[10px] pb-[10px] xl:w-[340px] lg:w-[340px] text-[18px] font-[500] leading-[27px] focus:outline-none`}
                onClick={() => handleButtonClick("customer")}
              >
                Customer Experience
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="xl:mt-[100px] lg:mt-[100px] sm:px-[30px] md:px-[45px] lg:px-[30px]">
        <div className="">
          <div className="xl:w-[1248px]  sm:p-[0px] p-[30px] lg:w-[90%] md:w-full  mx-auto w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-[31px] lg:mt-[56px] md:mt-[40px] mt-[35px] lg:pb-[101px]  flex-col md:pb-[101px]">
            <div className="box-mask rounded-[12px] border border-boxBorderColor flex items-left lg:h-[530px] flex-col col-span-1 lg:col-span-2 row-span-2 ">
              <div className="p-[32px]">
                <h2 className="text-[24px] leading-[36px] font-bold text-primary pb-[8px]">
                  Real-Time Threat Detection
                </h2>
                <h3 className="text-primary text-[20px] pb-[8px] leading-[30px] font-[600] w-full">
                  Detect under 2 seconds
                </h3>
                <p className="text-secondary text-[16px] leading-[24px] w-full">
                  Seamlessly manage and secure resources across multiple cloud
                  providers, including AWS, Azure, and GCP.
                </p>
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

            <div className="integrated-dashboard rounded-[12px] border border-boxBorderColor  row-span-5  lg:h-[294px]   h-auto flex-col xl:p-[32px] lg:p-[32px] md:p-[32px] p-3 flex items-start overflow-hidden">
              <h2 className="text-[24px] leading-[36px] font-bold text-primary pb-[8px]">
                Automated Compliance
              </h2>
              <h3 className="text-primary text-[20px] pb-[8px] leading-[30px] font-[600] w-full">
                99% Compliance accuracy
              </h3>
              <p className="text-secondary text-[16px] leading-[24px] w-full pb-[76px]">
                Ensure compliance with GDPR, HIPAA, PCI DSS, and more,
                automatically. Achieve 99% compliance accuracy.
              </p>
            </div>

            <div className="integrated-dashboard rounded-[12px] border border-boxBorderColor  row-span-5 lg:h-[532px] md:h-[532px] md:w-full h-[700px] flex-col xl:p-[32px] lg:p-[32px] md:p-[32px] p-3 flex items-start overflow-hidden">
              <h2 className="text-[24px] leading-[36px] font-bold text-primary pb-[8px]">
                Integrated Dashboard
              </h2>
              <h3 className="text-primary text-[20px] pb-[8px] leading-[30px] font-[600] w-full">
                24/7 monitoring
              </h3>
              <p className="text-secondary text-[16px] leading-[24px] w-full pb-[76px]">
                Manage all security aspects from a centralised, user-friendly
                dashboard. 24/7 monitoring and reporting.
              </p>
              <div className="flex justify-center w-full relative mt-3">
                <Image
                  src={cis}
                  alt="Contact Us Image"
                  width={250}
                  height={184}
                  className="realtime_image"
                />
                <div className="cpu-usage flex justify-center w-full absolute top-[70px]">
                  <Image
                    src={iso2}
                    alt="Contact Us Image"
                    width={300}
                    className="realtime_image"
                  />
                </div>
                <div className="cpu-usage flex justify-center w-full absolute top-[150px]">
                  <Image
                    src={iso}
                    alt="Contact Us Image"
                    width={350}
                    className="realtime_image"
                  />
                </div>
                <div className="flex justify-center w-full absolute top-[250px] ">
                  <Image
                    src={gdpr}
                    alt="Contact Us Image"
                    width={400}
                    height={200}
                    className="realtime_image"
                  />
                </div>
              </div>
            </div>
            <div className="integrated-dashboard rounded-[12px] border border-boxBorderColor  row-span-5  lg:h-[294px]  md:w-full h-auto flex-col xl:p-[32px] lg:p-[32px] md:p-[32px] p-3 flex items-start overflow-hidden">
              <h2 className="text-[24px] leading-[36px] font-bold text-primary pb-[8px]">
                Robust Data Encryption
              </h2>
              <h3 className="text-primary text-[20px] pb-[8px] leading-[30px] font-[600] w-full">
                256-bit encryption
              </h3>
              <p className="text-secondary text-[16px] leading-[24px] w-full pb-[76px]">
                Protect your data with industry-leading encryption technologies.
                256-bit encryption ensures maximum security.
              </p>
            </div>

            <div className="integrated-dashboard rounded-[12px] border border-boxBorderColor  row-span-5 lg:h-[527px] lg:mt-[-570px] xl:mt-[-570px] md:h-[782px] md:w-full h-[700px] flex-col xl:p-[32px] lg:p-[32px] md:p-[32px] p-3 flex items-start overflow-hidden">
              <h2 className="text-[24px] leading-[36px] font-bold text-primary pb-[8px]">
                AI-Driven Insights
              </h2>
              <h3 className="text-primary text-[20px] pb-[8px] leading-[30px] font-[600] w-full">
                1M data points analysed per second
              </h3>
              <p className="text-secondary text-[16px] leading-[24px] w-full pb-[76px]">
                Gain actionable insights and predictive analytics to stay ahead
                of threats. Over 1 million data points analysed per second.
              </p>
              <div className="flex justify-center w-full relative mt-3">
                <Image
                  src={cis}
                  alt="Contact Us Image"
                  width={250}
                  height={184}
                  className="realtime_image"
                />
                <div className="cpu-usage flex justify-center w-full absolute top-[70px]">
                  <Image
                    src={iso2}
                    alt="Contact Us Image"
                    width={300}
                    className="realtime_image"
                  />
                </div>
                <div className="cpu-usage flex justify-center w-full absolute top-[150px]">
                  <Image
                    src={iso}
                    alt="Contact Us Image"
                    width={350}
                    className="realtime_image"
                  />
                </div>
                <div className="flex justify-center w-full absolute top-[250px] ">
                  <Image
                    src={gdpr}
                    alt="Contact Us Image"
                    width={400}
                    height={200}
                    className="realtime_image"
                  />
                </div>
              </div>
            </div>
            <div className="box-mask rounded-[12px] border border-boxBorderColor flex items-left lg:h-[530px] flex-col col-span-1 lg:col-span-3 row-span-2 xl:mt-[-330px] lg:mt-[-330px] lg:ml-[400px] xl:ml-[420px] ">
              <div className="p-[32px]">
                <h2 className="text-[24px] leading-[36px] font-bold text-primary pb-[8px]">
                  Seamless Integration
                </h2>
                <h3 className="text-primary text-[20px] pb-[8px] leading-[30px] font-[600] w-full">
                  50+ integrations
                </h3>
                <p className="text-secondary text-[16px] leading-[24px] w-full">
                  Easily integrate with existing tools and workflows for a
                  smooth experience. Supports over 50 integrations.
                </p>
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
            <div className="integrated-dashboard rounded-[12px] border border-boxBorderColor  row-span-5  lg:h-[294px]   h-auto flex-col xl:p-[32px] lg:p-[32px] md:p-[32px] lg:mt-[-325px]  xl:mt-[-325px] p-3 flex items-start overflow-hidden">
              <h2 className="text-[24px] leading-[36px] font-bold text-primary pb-[8px]">
                Customizable Alerts
              </h2>
              <h3 className="text-primary text-[20px] pb-[8px] leading-[30px] font-[600] w-full">
                1 Second Notification
              </h3>
              <p className="text-secondary text-[16px] leading-[24px] w-full pb-[76px]">
                Receive real-time alerts customized to your specific security
                needs. Instant notifications within 1 second.
              </p>
            </div>
          </div>
          <div className="xl:w-[1148px] lg:w-[90%] sm:px-[30px] md:mt-[-250px] sm:mt-[-5px] mt-[-30px] xl:mt-[-250px] w-full mx-auto">
            <Image
              src={pattern}
              alt="Contact Us Image"
              width={820}
              height={395}
              className="realtime_image w-full"
            ></Image>
          </div>
        </div>
      </section>
      <section className="xl:w-[1248px] lg:w-[100%] md:w-full md:px-[30px] mx-auto w-full  mask lg:mt-[10px] md:mt-[70px] mt-[30px]">
        <div className="flex justify-center">
          <Button className="text-[14px] hover:bg-boxbgColor  mb-[30px] mt-[51px] font-[400] text-primary bg-boxbgColor border border-boxBorderColor  rounded-[30px]">
            AI Agents
          </Button>
        </div>
        <div className="lg:w-full md:w-full w-[90%] mx-auto flex flex-col items-center gap-3 justify-center pb-[16px]">
          <h2 className="text-primary text-center font-bold lg:text-[40px] md:text-[30px] text-[24px] leading-[50px]">
            AI Agents
          </h2>
          <p className="text-secondary xl:w-[477px] lg:w-[477px] md:w-[450px] w-[90%] text-center lg:text-[16px] md:text-[15px] text-[14px] leading-[24px] font-[400]">
            Harness the power of specialized AI Agents with Cleo to enhance your
            cloud management and security.
          </p>
        </div>
        <div className="xl:w-[1250px] lg:w-[95%]  mx-auto flex flex-col md:flex-row  lg:justify-between pb-[30px] lg:py-[56px]">
          <div className="xl:p-0 px-[50px] ">
            <ul>
              <li className="text-primary text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-[24px] md:leading-[27px] lg:leading-[30px] xl:leading-[33px] font-[500] list-disc mb-[10px] md:mb-[12px] lg:mb-[14px] xl:mb-[16px]">
                Rule Discoverability Agent Engines
              </li>
              <li className="text-secondary text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-[24px] md:leading-[27px] lg:leading-[30px] xl:leading-[33px] font-[400] list-disc mb-[10px] md:mb-[12px] lg:mb-[14px] xl:mb-[16px]">
                Cloud Security Posture Management (CSPM) Agent
              </li>
              <li className="text-secondary text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-[24px] md:leading-[27px] lg:leading-[30px] xl:leading-[33px] font-[400] list-disc mb-[10px] md:mb-[12px] lg:mb-[14px] xl:mb-[16px]">
                Cost Optimization Agent
              </li>
              <li className="text-secondary text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-[24px] md:leading-[27px] lg:leading-[30px] xl:leading-[33px] font-[400] list-disc mb-[10px] md:mb-[12px] lg:mb-[14px] xl:mb-[16px]">
                Compliance and Regulatory Agent
              </li>
              <li className="text-secondary text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-[24px] md:leading-[27px] lg:leading-[30px] xl:leading-[33px] font-[400] list-disc mb-[10px] md:mb-[12px] lg:mb-[14px] xl:mb-[16px]">
                Vulnerability Management Agent
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-[100%]  items-end flex flex-col gap-[20px] lg:gap-[50px] md:flex-col md:flex md:gap-[50px] ">
            <ImageCard
              backgroundImage=""
              imageSrc=""
              imageSrc2="/assets/cleo/discovered.png"
              title="Discoverability Agent"
              description="Enhance visibility across your cloud environment. The Discoverability Agent identifies all assets, ensuring nothing is overlooked, and provides a clear map of your infrastructure."
              className=" h-[333px]"
              imageSrcStyle1=""
              imageSrcStyle2="xl:w-[100%] w-[100%] sm:h-[280px] h-[200px]  absolute bottom-0 lg:w-[100%] xl:h-[255px] lg:h-[235px] md:h-[220px] lg:mt-[16px] mt-0"
              backgroundMainImage=""
            />
            <ImageCard
              backgroundImage=""
              imageSrc="/assets/cleo/dash-1.png"
              imageSrc2="/assets/cleo/dash-2.png"
              title="Cloud Security Posture Management (CSPM) Agent"
              description="Maintain and improve your cloud security posture. The CSPM Agent continuously assesses your environment, identifies risks, and offers actionable recommendations to strengthen your defenses."
              className="h-auto xl:h-[400px] lg:h-[400px] md:h-[390px]"
              imageSrcStyle1="object-contain ml-6 lg:mt-[10px]  md:mt-[40px] w-full h-full mt-[20px]"
              imageSrcStyle2="object-contain -ml-6 max-w-full w-[400px] h-full mt-[5px] z-50"
              backgroundMainImage="/assets/cleo/lightbackground.png"
            />

            <ImageCard
              backgroundImage="/assets/bannerbg.png"
              imageSrc="/assets/cleo/curvea.png"
              imageSrc2="/assets/cleo/curveb.png"
              title="Cost Optimization Agent"
              description="Maximize cost efficiency with the Cost Optimization Agent. It analyzes usage patterns and identifies opportunities for savings, helping you optimize resource allocation and reduce expenses."
              className="sm:h-[390px]"
              imageSrcStyle1="object-contain ml-3 w-full h-full "
              imageSrcStyle2="object-contain -ml-3 max-w-full w-[400px] h-full z-50"
              backgroundMainImage="/assets/cleo/background2.png"
            />
            <ImageCard
              backgroundImage="/assets/blackbg.png"
              imageSrc="/assets/cleo/circle.png"
              imageSrc2=""
              title="Compliance and Regulatory Agent"
              description="Stay compliant with ease. The Compliance and Regulatory Agent monitors your adherence to industry standards and regulations, automates reporting, and provides guidance to close compliance gaps."
              className="h-[333px]"
              imageSrcStyle1="object-contain object-center xl:ml-[200px] xl:w-[400px] lg:ml-[145px] flex justify-center   sm:ml-[90px] ml-[45px] sm:w-[70%] w-[75%] lg:h-[280px] xl:h-[310px] md:w-[390px] h-[230px] sm:h-[300px] absolute bottom-0"
              imageSrcStyle2=""
              backgroundMainImage=""
            />
            <ImageCard
              backgroundImage="/assets/blackbg.png"
              imageSrc="/assets/cleo/group-3.png"
              imageSrc2=""
              title="Vulnerability Management Agent"
              description="Protect your environment from potential threats. The Vulnerability Management Agent scans for vulnerabilities, prioritizes them based on risk, and suggests remediation steps to mitigate exposure."
              className="sm:h-[280px] h-[301px]"
              imageSrcStyle1=" xl:w-[100%] px-[20px] h-auto lg:h-[255px] xl:h-[230px] w-[100%] md:h-auto sm:h-[265px] absolute bottom-0"
              imageSrcStyle2=""
              backgroundMainImage="/assets/cleo/background3.png"
            />
          </div>
        </div>
      </section>
      <section className="xl:w-[1248px] lg:w-[90%] md:w-full p-[30px] mx-auto w-full">
        <Form />
      </section>
      <section className="xl:w-[1248px] lg:w-[90%] md:w-full p-[30px] mx-auto w-full ">
        <Paid />
      </section>
      <section className="xl:w-[1248px]  lg:w-[90%] md:w-full p-[30px] mx-auto w-full ">
        <TalkToUs />
      </section>
    </section>
  );
}
