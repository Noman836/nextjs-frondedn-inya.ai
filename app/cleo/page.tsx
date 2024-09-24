"use client";
import Tag from "@/components/Tag";
import type { NextPage } from "next";
import Image from "next/image";
import HeroImage from "../../public/assets/cleo/heroImage.png";
import "../style/Cleo.css";
import ImageCard from "@/components/ImageCard";
import MiniCard from "@/components/MiniCard";
import ReadyToExperience from "@/components/ReadyToExperience";
import { Button } from "@/components/ui/button";
import SectionLayout from "@/components/SectionLayout";
import imageSrc2 from "../../public/assets/cleo/bg22.png";

const login: NextPage = () => {
  return (
    <>
      <section className="header-section w-[100%] h-auto">
        <div className="shadow-container">
          <main className="container w-full pt-[120px] md:pt-[100px] lg:pt-[195px]">
            <div className="w-full">
              <div className="flex justify-center">
                <Tag className="" title="AI Specialised Agent" />
              </div>
              <h1 className="lg:w-2/3 mx-auto w-full text-[24px] leading-[25px] md:text-[40px]  lg:text-[48px] xl:text-[50px] pt-[16px] md:pt-[20px] lg:pt-[24px] xl:pt-[24px] md:leading-[50px] lg:leading-[60px] xl:leading-[64px] font-bold text-primary text-center">
                Project Cleo: <br /> A Universal Cloud Security AI Agent that is
                helpful in securing everything on cloud.
              </h1>

              <p className="w-[100%] lg:w-[55%] mx-auto pt-[12px] md:pt-[14px] lg:pt-[16px] xl:pt-[16px] font-[400] text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] leading-[22px] md:leading-[23px] lg:leading-[24px] xl:leading-[24px] text-primary text-center">
                Cleo is an intelligent AI-driven platform designed to enhance
                your cloud security posture. With Cleo, you gain deep insights,
                real-time threat detection, and actionable recommendations to
                protect your cloud environment.
              </p>

              <div className="flex justify-center pt-[20px] xl:pt-[32px]">
                <Button className="bg-primary rounded-[6px] px-[36px] py-[12px] text-colorBlack font-[600] hover:bg-primary active:bg-primary">
                  Get Early Access
                </Button>
              </div>
            </div>
          </main>

          <section className="container m-auto xl:pt-[83px] pt-[40px] lg:pt-[83px] md:pt-[83px] w-[100%]">
            <figure>
              <Image
                src={HeroImage}
                alt="Contact Us Image"
                width={1500}
                height={800}
              />
            </figure>
          </section>
        </div>
      </section>
      <section className="container-fluid bg-black lg:pt-[100px] md:pt-[100px] mt-[30px]">
        <div className="container h-auto">
          <div className="flex justify-center flex-col items-center">
            <h2 className="text-primary text-center font-bold xl:text-[40px] lg:text-[40px] md:text-[40px] text-[24px] leading-[50px]">
              Core Features of Cleo
            </h2>
            <p className="xl:w-[45%] lg:w-[70%] md:w-[36%] w-full lg:pt-[16px] text-secondary text-center lg:text-[16px] md:text-[16px] text-[14px] leading-[24px] font-[400]">
            Cleo offers seamless multi-cloud support, continuous learning, and automated compliance management.
            </p>
          </div>
          <SectionLayout />
        </div>
      </section>
      <section className="container-fluid mask lg:mt-[100px] md:mt-[100px] mt-[30px]">
        <div className="lg:w-full md:w-full w-[90%] mx-auto flex flex-col items-center gap-3 justify-center pb-[16px]">
          <h2 className="text-primary text-center font-bold lg:text-[40px] md:text-[30px] text-[24px] leading-[50px]">
            AI Agents
          </h2>
          <p className="text-secondary xl:w-[36%] lg:w-[45%] md:w-[36%] w-full text-center lg:text-[16px] md:text-[15px] text-[14px] leading-[24px] font-[400]">
            Harness the power of specialized AI Agents with Cleo to enhance your
            cloud management and security.
          </p>
        </div>
        <div className="container flex flex-col md:flex-row  lg:justify-between lg:py-[56px]">
          <div className="w-full md:w-2/3 lg:w-1/3 lg:h-[400px] px-5 py-4">
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
          <div className="w-full lg:w-2/3  items-end flex flex-col gap-3 lg:p-3">
            <ImageCard
              backgroundImage=""
              imageSrc=""
              imageSrc2="/assets/cleo/discovered.png"
              title="Discoverability Agent"
              description="Enhance visibility across your cloud environment. The Discoverability Agent identifies all assets, ensuring nothing is overlooked, and provides a clear map of your infrastructure."
              className=""
              imageSrcStyle1=""
              imageSrcStyle2="w-[100%] absolute bottom-0 xl:h-[320px] lg:h-[240px] h-[160px] lg:mt-[16px]"
              backgroundMainImage=""
            />
            <ImageCard
              backgroundImage=""
              imageSrc="/assets/cleo/dash-1.png"
              imageSrc2="/assets/cleo/dash-2.png"
              title="Cloud Security Posture Management (CSPM) Agent"
              description="Maintain and improve your cloud security posture. The CSPM Agent continuously assesses your environment, identifies risks, and offers actionable recommendations to strengthen your defenses."
              className=""
              imageSrcStyle1="pt-[13px] xl:pt-[32px] xl:absolute md:left-0 xl:left-[32px] bottom-0 lg:h-[190.1px] lg:bottom-0 lg:absolute lg:left-[32px] xl:h-[280.1px] lg:w-[250px] xl:w-[550px] md:h-[240.1px] h-[130px] md:w-[350px] w-[310px]  absolute bottom-0 xl:w-auto xl:h-auto"
              imageSrcStyle2="absolute xl:pt-[32px]  md:right-8 right-4 bottom-0 lg:h-[225.1px] md:h-[175.1px] lg:mt-[16px] lg:w-[338px] w-[215px] xl:w-[500px] xl:h-auto"
              backgroundMainImage="/assets/cleo/lightbackground.png"
            />

            <ImageCard
              backgroundImage="/assets/bannerbg.png"
              imageSrc="/assets/cleo/curvea.png"
              imageSrc2="/assets/cleo/curveb.png"
              title="Cost Optimization Agent"
              description="Maximize cost efficiency with the Cost Optimization Agent. It analyzes usage patterns and identifies opportunities for savings, helping you optimize resource allocation and reduce expenses."
              className=""
              imageSrcStyle1="xl:pt-[32px] left-2 lg:pt-[65px] lg:absolute absolute  lg:h-[300px] xl:h-[350px]  xl:left-[160px] sm:left-2 bottom-0 lg:w-[346px] w-[250px] h-[170px]"
              imageSrcStyle2="absolute xl:right-[160px] xl:pt-[0px] lg:pt-[40px]  right-2 xl:h-[320px]  bottom-0 lg:right-[10px] lg:h-[270px] lg:w-[346px] w-[250px] h-[170px]"
              backgroundMainImage="/assets/cleo/background2.png"
            />
            <ImageCard
              backgroundImage="/assets/blackbg.png"
              imageSrc="/assets/cleo/circle.png"
              imageSrc2=""
              title="Compliance and Regulatory Agent"
              description="Stay compliant with ease. The Compliance and Regulatory Agent monitors your adherence to industry standards and regulations, automates reporting, and provides guidance to close compliance gaps."
              className="h-[465px]  "
              imageSrcStyle1="xl:w-[380px] lg:w-[216px] w-[250px] xl:h-[357px] h-[220px]  absolute bottom-0"
              imageSrcStyle2=""
              backgroundMainImage=""
            />
            <ImageCard
              backgroundImage="/assets/blackbg.png"
              imageSrc="/assets/cleo/group-3.png"
              imageSrc2=""
              title="Compliance and Regulatory Agent"
              description="Stay compliant with ease. The Compliance and Regulatory Agent monitors your adherence to industry standards and regulations, automates reporting, and provides guidance to close compliance gaps."
              className=""
              imageSrcStyle1="xl:w-[95%] xl:h-[280px] w-[95%] xl:h-[310px] absolute bottom-0"
              imageSrcStyle2=""
              backgroundMainImage="/assets/cleo/background3.png"
            />
          </div>
        </div>
      </section>
      {/* ================Advance Functionality================== */}
      <section className="bg-black container-fluid">
        <div className="container">
          <div className="flex flex-col items-center gap-3 lg:pt-[100px] xl:pt-[100px] md:pt-[100px] pt-[30px]">
            <h2 className="text-primary text-center pb-[8px] font-bold lg:text-[40px] md:text-[30px] text-[24px] leading-[50px]">
              Advanced Functionalities
            </h2>
            <p className="xl:w-[73%] lg:w-[75%] md:w-[75%] w-full text-secondary text-center font-[400] lg:text-[16px] md:text-[15px] text-[14px] pb-[56px] leading-[24px]">
              Unlock strategic value with Cleo&apos;s high-level AI insights and
              tailored recommendations for cloud resource management, enhancing
              security and efficiency across your cloud infrastructure.
            </p>
          </div>
          <div className="lg:flex lg:justify-center lg:flex-row flex-col lg:gap-[30px]  pt-3 lg:px-3 lg:pb-[100px]">
            <div className="lg:w-1/2 w-full  border border-boxBorderColor overflow-hidden rounded-[12px]">
              <div className="p-[32px]">
                <h1 className="text-primary font-bold text-[24px] leading-[36px] pb-[8px]">
                  High-Level AI Insights
                </h1>
                <p className="text-secondary font-[400] text-[16px] leading-[24px] pb-[32px]">
                  Unlock deeper understanding with Cleo&apos;s advanced AI
                  insights, offering high-level analyses of security trends and
                  potential risks.
                </p>
              </div>
              <div className="coverbg w-full h-[325px] mt-[-33px]"></div>
            </div>
            <div className="lg:w-1/2 w-full border lg:mt-0 mt-3 border-boxBorderColor rounded-[12px] ">
              <div className="p-[32px]">
                <h1 className="text-primary font-bold text-[24px] leading-[36px] pb-[8px]">
                  High-Level AI Insights
                </h1>
                <p className="text-secondary font-[400] text-[16px] leading-[24px] pb-[32px]">
                  Unlock deeper understanding with Cleo&apos;s advanced AI
                  insights, offering high-level analyses of security trends and
                  potential risks.
                </p>
              </div>
              <div className="graph flex justify-center w-full p-[32px] h-[325px] mt-[-33px] bg-red-600overflow-hidden">
                <Image
                  src={imageSrc2}
                  alt="mobile image"
                  width={680}
                  height={377}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================User Benefits ================== */}
      <section className=" container-fluid lg:py-[100px] md:py-[100px] pt-[30px]">
        <div className="container">
          <div className="flex flex-col items-center gap-3 ">
            <h2 className="text-primary text-center font-bold lg:text-[40px] md:text-[30px] text-[24px] leading-[50px]">
              Use Cases or Benefits
            </h2>
            <p className="xl:w-[73%] lg:w-[75%] md:w-[75%]  w-full text-primary text-center font-[400] lg:text-[16px] md:text-[15px] text-[14px] leading-[24px]">
              Unlock strategic value with Cleo&apos;s high-level AI insights and
              tailored recommendations for cloud resource management, enhancing
              security and efficiency across your cloud infrastructure.
            </p>
          </div>
          <div className="flex flex-wrap gap-[30px] justify-center lg:pt-[58px] md:pt-[58px] pt-[30px]">
            <MiniCard
              title="Multi-Cloud Environment"
              description="Managing security across multiple cloud providers can be complex and time-consuming."
              descclasssName=""
              buttonClassName="flex text-primary gap-[10.67px] items-center"
              titleStyle=""
              showImage={true}
            />
            <MiniCard
              title="Proactive Threat Mitigation"
              description="Identifying and responding to evolving threats in a timely manner is challenging."
              descclasssName=""
              titleStyle=""
              buttonClassName="flex text-primary gap-[10.67px] items-center"
              showImage={true}
            />
            <MiniCard
              title="Ensuring Compliance"
              description="Maintaining compliance with multiple industry standards and regulations is resource."
              descclasssName=""
              titleStyle=""
              showImage={true}
              buttonClassName="flex text-primary gap-[10.67px] items-center"
            />
            <MiniCard
              title="Optimizing Cloud Costs"
              description="Unchecked cloud resource usage can lead to be excessive costs."
              descclasssName="h-[70px] w-[240px]"
              titleStyle=""
              showImage={true}
              buttonClassName="flex text-primary gap-[10.67px] items-center"
            />
            <MiniCard
              title="Enhancing Visibility and Control"
              description="Lack of visibility into cloud assets and configurations can lead to security gaps."
              descclasssName=""
              titleStyle=""
              showImage={true}
              buttonClassName="flex text-primary gap-[10.67px] items-center"
            />
            <MiniCard
              title="Vulnerability Management"
              description="Identifying and prioritizing vulnerabilities in a large cloud environment is difficult."
              descclasssName=""
              titleStyle=""
              showImage={true}
              buttonClassName="flex text-primary gap-[10.67px] items-center"
            />
            <MiniCard
              title="Informed Decision-Making"
              description="Making data-driven decisions without clear insights can be challenging."
              descclasssName=""
              titleStyle=""
              showImage={true}
              buttonClassName="flex text-primary gap-[10.67px] items-center"
            />
            <MiniCard
              title="Streamlined Incident"
              description="Coordinating an effective response to security incidents can be complex."
              descclasssName=""
              titleStyle=""
              showImage={true}
              buttonClassName="flex text-primary gap-[10.67px] items-center"
            />
          </div>
        </div>
      </section>
      <section className="container-fluid lg:my-[100px] mt-[30px] ">
        <div className="container">
          <ReadyToExperience
            name="Ready to Experience Cleo?"
            desc="Discover how Cleo can transform your cloud security and management strategy. Whether you're looking to enhance visibility, optimize costs, or ensure compliance, Cleo is your ultimate AI-powered companion."
            headingName=""
            descName=""
            backgroundImage="/assets/cleo/advance-bacground.png"
          />
        </div>
      </section>
      <section className=" container-fluid ">
        <div className="container lg:py-[100px] py-[30px]">
          <div className="flex flex-col items-center gap-3 pb-10">
            <h2 className="text-primary text-center font-bold lg:text-[40px] md:text-[30px] text-[24px] leading-[50px]">
              Future Roadmap
            </h2>
            <p className="xl:w-[70%] lg:w-[70%] md:w-[73%] w-full text-primary text-center font-[400] text-[16px] leading-[24px]">
              At Cleo, we&apos;re scommitted to continuous innovation and
              delivering the best solutions for your cloud security and
              management needs.
            </p>
          </div>
          <div className="lg:flex lg:flex-row flex-col lg:gap-[30px]  w-full">
            <MiniCard
              title="MAI-Powered Security Posture Assessment"
              description="Enhance your security posture with advanced AI-driven assessments, providing deeper insights and automated recommendations for improving your cloud security."
              className="lg:w-1/2 w-full border h-auto  border-boxBorderColor rounded-[12px]"
              buttonText="Learn More"
              buttonClassName="border text-primary border-boxBorderColor rounded-[6px] px-[19px] py-[6px]"
              descclasssName="lg:w-[545px] text-[16px] font-[400] leading-[24px]"
              titleStyle="text-[24px] font-[700] leading-[36px]"
              showImage={false}
            />
            <MiniCard
              title="Zero Trust Security Model"
              description="Implement a robust Zero Trust Security Model to ensure continuous verification of all access requests, reducing risks and strengthening your overall security framework."
              buttonText="Learn More"
              className="lg:w-1/2 w-full h-auto border border-boxBorderColor rounded-[12px] mt-[30px]"
              buttonClassName="border text-primary border-boxBorderColor rounded-[6px] px-[19px] py-[6px]"
              descclasssName="lg:w-[545px]  text-[16px] font-[400] leading-[24px]"
              titleStyle="text-[24px] font-[700] leading-[36px]"
              showImage={false}
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default login;
