import Tag from "@/components/Tag";
import { Button } from "@/components/ui/button";
import React from "react";
import "../style/Agent.css";
import heroImage from "../../public/assets/agent/heroimg.png";
import Image from "next/image";
import MiniCard from "@/components/MiniCard";
import ImageCard from "@/components/ImageCard";
import imageSrc from "../../public/assets/agent/card6.png";
import imageSrc2 from "../../public/assets/agent/card7.png";
import imagesrc3 from "../../public/assets/agent/card8.png";
import imagesrc4 from "../../public/assets/agent/card9.png";
import ReadyToExperience from "@/components/ReadyToExperience";
import MainCard from "@/components/MainCard";
import HowWork from "../../public/assets/agent/howitwork.svg";

export async function generateMetadata() {
  return {
    title: "Agent",
    description:
      "Discover how Cleo can transform your cloud security and management strategy. Ready to experience Cleo?",
  };
}

const page = () => {
  return (
    <>
      <section className="main-section container-fluid bg-black-100 h-auto p-5">
        <div className="shadow-container">
          <div className="container flex flex-col lg:pt-[194px] md:pt-[130px] pt-[100px]">
            <div className="flex justify-center items-center">
              <Tag className="" title="AI-Agents" />
            </div>
            <div className="w-full flex justify-center">
              <h1 className="xl:w-[627px] lg:w-[627px] md:w-[527px] w-full mx-auto text-[24px] leading-[25px] md:text-[40px]  lg:text-[48px] xl:text-[50px] pt-[16px] md:pt-[20px] lg:pt-[24px] xl:pt-[24px] md:leading-[50px] lg:leading-[60px] xl:leading-[64px] font-bold text-primary text-center">
                Discover Hidden Assets with AI Precision
              </h1>
            </div>
            <p className="xl:w-[455px] lg:w-[455px] md:w-[455px] mx-auto w-full pt-[12px] md:pt-[14px] lg:pt-[16px] xl:pt-[16px] font-[400] text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] leading-[22px] md:leading-[23px] lg:leading-[24px] xl:leading-[24px] text-secondary text-center">
              Transform how you identify, categorize, and manage your cloud
              resources with Cleo&apos;s Discoverability Agent.
            </p>
            <div className="flex justify-center items-center gap-[16px] mt-[32px]">
              <Button className="bg-primary rounded-[6px] px-[36px] py-[12px] text-colorBlack text-[16px] leading-[24px] hover:bg-white font-[600] active:bg-primary">
                Learn More
              </Button>
              <Button className="bg-boxbgColor border border-boxBorderColor rounded-[6px] px-[36px] py-[12px] text-primary text-[16px] leading-[24px] font-[600] active:bg-boxbgColor">
                Request a Demo
              </Button>
            </div>
          </div>
          <div className="flex justify-center mt-[80px]">
            <Image
              src={heroImage}
              alt="mobile image"
              width={1236}
              height={877}
            />
          </div>
        </div>
      </section>
      <section className="container-fluid bg-black p-3">
        <div className="w-full flex justify-center lg:mt-[80px] mt-[40px]">
          <h1 className="xl:w-[855px] lg:w-[855px] w-full text-[24px] p-5 leading-[25px] md:text-[40px]  lg:text-[48px] xl:text-[50px]   xl:pt-[24px] md:leading-[50px] lg:leading-[60px] xl:leading-[64px] font-bold text-primary text-center">
            Overview: Empowering Cloud Management with Cleo&apos;s AI Agents
          </h1>
        </div>
        <div className="xl:w-[1248px] lg:w-[1248px] md:w-[90%] mx-auto flex flex-wrap justify-center gap-[30px] lg:mt-[56px] md:mt-[50px] mt-[30px] lg:mb-[100px] w-full">
          <MiniCard
            title="Discoverability Agent"
            description="The Discoverability Agent helps you manage the ever-growing complexity of cloud assets. Uncover every resource and ensure nothing slips through the cracks."
            descclasssName="lg:w-[100%]"
            titleStyle="text-[20px] leading-[30px]"
            showImage={false}
            buttonClassName=""
            className="lg:w-[396px] lg:h-[209px] w-full h-full border border-boxBorderColor rounded-[12px]"
          />
          <MiniCard
            title="Cloud Security Posture Management (CSPM) Agent"
            description="The CSPM Agent addresses the critical need for continuous monitoring and management of cloud security."
            descclasssName="lg:w-[100%]"
            titleStyle="text-[20px] leading-[30px]"
            showImage={false}
            buttonClassName=""
            className="lg:w-[396px] lg:h-[209px] w-full h-full border border-boxBorderColor rounded-[12px]"
          />
          <MiniCard
            title="Cost Optimization Agent"
            description="The Cost Optimization Agent tackles the challenge of controlling and reducing cloud expenditure."
            descclasssName="lg:w-[100%]"
            titleStyle="text-[20px] leading-[30px]"
            showImage={false}
            buttonClassName=""
            className="lg:w-[396px] lg:h-[209px] w-full h-full border border-boxBorderColor rounded-[12px]"
          />
          <MiniCard
            title="Compliance and Regulatory Agent"
            description="The Compliance and Regulatory Agent ensures your cloud environment adheres to various regulatory standards and best practices."
            descclasssName="lg:w-[100%]"
            titleStyle="text-[20px] leading-[30px]"
            showImage={false}
            buttonClassName=""
            className="lg:w-[396px] lg:h-[209px] w-full h-full border border-boxBorderColor rounded-[12px]"
          />
          <MiniCard
            title="Vulnerability Management Agent"
            description="The Vulnerability Management Agent focuses on identifying and mitigating vulnerabilities in your cloud environment."
            descclasssName="lg:w-[100%]"
            titleStyle="text-[20px] leading-[30px]"
            showImage={false}
            buttonClassName=""
            className="lg:w-[396px] lg:h-[209px] w-full h-full border border-boxBorderColor rounded-[12px]"
          />
        </div>
        <section className="container-fluid agentbg p-3">
          <div className="flex flex-col items-center gap-3 justify-center lg:pt-20 pt-8 pb-5">
            <h2 className="text-primary text-center font-bold lg:text-[40px] md:text-[30px] text-[24px] leading-[50px]">
              Key Features
            </h2>
          </div>
          <div className="xl:w-[1248px] lg:w-[1248px] md:w-[90%] mx-auto flex flex-col md:flex-row  lg:justify-between lg:p-5">
            <div className="w-full md:w-2/3 lg:w-1/3 lg:h-[400px] px-5 py-4">
              <ul>
                <li className="text-primary text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-[24px] md:leading-[27px] lg:leading-[30px] xl:leading-[33px] font-[500] list-disc mb-[10px] md:mb-[12px] lg:mb-[14px] xl:mb-[16px]">
                  Asset Summary
                </li>
                <li className="text-secondary text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-[24px] md:leading-[27px] lg:leading-[30px] xl:leading-[33px] font-[400] list-disc mb-[10px] md:mb-[12px] lg:mb-[14px] xl:mb-[16px]">
                  Comprehensive Discovered Resources
                </li>
                <li className="text-secondary text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-[24px] md:leading-[27px] lg:leading-[30px] xl:leading-[33px] font-[400] list-disc mb-[10px] md:mb-[12px] lg:mb-[14px] xl:mb-[16px]">
                  Cost Optimization Agent
                </li>
                <li className="text-secondary text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-[24px] md:leading-[27px] lg:leading-[30px] xl:leading-[33px] font-[400] list-disc mb-[10px] md:mb-[12px] lg:mb-[14px] xl:mb-[16px]">
                  Tagging Overview
                </li>
                <li className="text-secondary text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-[24px] md:leading-[27px] lg:leading-[30px] xl:leading-[33px] font-[400] list-disc mb-[10px] md:mb-[12px] lg:mb-[14px] xl:mb-[16px]">
                  Real-Time Metrics & Alerts
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-2/3 items-end flex flex-col gap-[30px] lg:p-3">
              <ImageCard
                backgroundImage=""
                imageSrc=""
                imageSrc2="/assets/agent/card1.png"
                title="Asset Summary"
                description="Get a comprehensive overview of all your cloud assets at a glance."
                className="md:h-[340px] h-[246px]"
                imageSrcStyle1=""
                imageSrcStyle2="xl:w-[100%] w-[100%]  absolute bottom-0 lg:w-[100%] xl:h-[300px] lg:h-[290px] md:h-[200px] lg:mt-[16px] mt-0"
                backgroundMainImage=""
              />
              <ImageCard
                backgroundImage=""
                imageSrc="/assets/agent/card2img1.png"
                imageSrc2="/assets/agent/card2img2.svg"
                title="Comprehensive Discovered Resources"
                description="Ensure full visibility with detailed reports on all discovered resources."
                className="md:h-[370px] h-[306px]"
                imageSrcStyle1="lg:pt-14 lg:absolute pl-[30px] lg:left-[38px] md:absolute md:left-[30px] bottom-0 lg:h-[279.1px] lg:w-[500px] md:w-[190px] md:h-[130px] h-[120px] w-[280px]"
                imageSrcStyle2="absolute md:right-[30px] right-[30px] bottom-0 lg:h-[310.1px] lg:w-[460px] md:w-[260px]  xl:w-[460px] w-[220px]"
                backgroundMainImage="/assets/cleo/lightbackground.png"
              />
              <ImageCard
                backgroundImage="/assets/bannerbg.png"
                imageSrc=""
                imageSrc2="/assets/agent/card3.svg"
                title="Cost Optimization Agent"
                description="Optimize cloud spend with tailored cost-saving recommendations."
                className="md:h-[320px] h-[248px]"
                imageSrcStyle1=""
                imageSrcStyle2="xl:w-[100%] w-[100%]  absolute bottom-0 lg:w-[100%] xl:h-[320px] lg:h-[300px] md:h-[210px] lg:mt-[16px] mt-0"
                backgroundMainImage="/assets/cleo/background2.png"
              />
              <ImageCard
                backgroundImage="/assets/blackbg.png"
                imageSrc=""
                imageSrc2="/assets/agent/card4.png"
                title="Tagging Overview"
                description="Easily manage and organize your assets with tagging capabilities."
                className="md:h-[320px]  h-[246px]"
                imageSrcStyle1=""
                imageSrcStyle2="xl:w-[100%] w-[100%]  absolute bottom-0 lg:w-[100%] xl:h-[310px] lg:h-[210px] md:h-[170px] lg:mt-[16px] mt-0"
                backgroundMainImage=""
              />
              <ImageCard
                backgroundImage="/assets/blackbg.png"
                imageSrc=""
                imageSrc2="/assets/agent/card5.png"
                title="Real-Time Metrics & Alerts"
                description="Receive real-time updates and alerts on asset changes and statuses."
                className="md:h-[320px]  h-[246px]"
                imageSrcStyle1=""
                imageSrcStyle2="xl:w-[100%] w-[100%]  absolute bottom-0 lg:w-[100%] xl:h-[310px] lg:h-[310px] md:h-[170px] lg:mt-[16px] mt-0"
                backgroundMainImage="/assets/cleo/background3.png"
              />
            </div>
          </div>
        </section>
        <section className="bg-black container-fluid p-3">
          <div className="xl:w-[1248px] lg:w-[1248px] md:w-[90%] mx-auto ">
            <div className="flex flex-col items-center gap-3 lg:pt-20 pt-10 pb-10">
              <h2 className="text-primary text-center font-bold lg:text-[40px] md:text-[30px] text-[24px] leading-[50px]">
                Use Cases and Benefits
              </h2>
              <p className="lg:w-2/3 text-primary text-center font-[400] lg:text-[16px] md:text-[15px] text-[14px] leading-[24px]">
                Specific Use Cases
              </p>
            </div>
            <div className="lg:flex lg:justify-center lg:flex-row flex-col lg:gap-[30px]  pt-3 lg:px-3">
              <div className="lg:w-1/2 w-full  border border-boxBorderColor overflow-hidden rounded-[12px]  md:mb-[30px]">
                <div className="p-5">
                  <h1 className="text-primary font-bold text-[24px] leading-[36px] pb-[8px]">
                    Automatically Discover and Categorize New Resources
                  </h1>
                  <p className="text-secondary font-[400] text-[16px] leading-[24px] pb-[32px]">
                    Leverage the Discoverability Agent to automatically identify
                    and categorize newly deployed resources across your cloud
                    environment.
                  </p>
                </div>
                <div className="coverbg w-full ">
                  <Image
                    src={imageSrc}
                    alt="mobile image"
                    className="w-[100%] h-auto"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 w-full border lg:mt-0 mt-3 border-boxBorderColor rounded-[12px] h-[90%] ">
                <div className="p-5">
                  <h1 className="text-primary font-bold text-[24px] leading-[36px] pb-[8px]">
                    Ensure Compliance with Asset Inventory Requirements
                  </h1>
                  <p className="text-secondary font-[400] text-[16px] leading-[24px] pb-[32px]">
                    Use the Discoverability Agent to maintain an up-to-date
                    inventory of all cloud assets, ensuring compliance with
                    internal policies.
                  </p>
                </div>
                <div className="graph flex justify-center overflow-hidden">
                  <Image
                    src={imageSrc2}
                    alt="mobile image"
                    className="w-[100%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-black container-fluid p-3">
          <div className="xl:w-[1248px] lg:w-[1248px] md:w-[90%] mx-auto ">
            <div className="flex flex-col items-center gap-[30px] lg:pt-20 pt-10 pb-10">
              <h2 className="text-primary text-center font-bold lg:text-[40px] md:text-[30px] text-[24px] leading-[50px]">
                Customer Benefits
              </h2>
            </div>
            <div className="lg:flex lg:justify-center lg:flex-row flex-col lg:gap-[30px]">
              <div className="lg:w-1/2 w-full  border border-boxBorderColor overflow-hidden rounded-[12px] md:mb-[30px]">
                <div className="p-5">
                  <h1 className="text-primary font-bold text-[24px] leading-[36px] pb-[8px]">
                    Improve Asset Management Efficiency
                  </h1>
                  <p className="text-secondary font-[400] text-[16px] leading-[24px] pb-[32px]">
                    Streamline asset management by providing a clear and
                    organized view of all cloud resources.
                  </p>
                </div>
                <div className="coverbg">
                  <Image
                    src={imagesrc3}
                    alt="mobile image"
                    className="w-[100%] h-auto"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 w-full border  border-boxBorderColor rounded-[12px] h-[90%]">
                <div className="p-5">
                  <h1 className="text-primary font-bold text-[24px] leading-[36px] pb-[8px]">
                    Reduce the Risk of Shadow IT
                  </h1>
                  <p className="text-secondary font-[400] text-[16px] leading-[24px] pb-[32px]">
                    Minimize the risk of unauthorized and unmanaged assets
                    (shadow IT) within your organization.
                  </p>
                </div>
                <div className="graph flex justify-center overflow-hidden">
                  <Image
                    src={imagesrc4}
                    alt="mobile image"
                    className="w-[100%] h-[100%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid lg:my-[100px] mt-[20px] p-3">
          <div className="xl:w-[1248px] lg:w-[1248px] md:w-[90%] mx-auto ">
            <div className="p-5">
              <h1 className="text-primary text-center font-bold text-[24px] leading-[30px] lg:text-[40px] lg:leading-[50px] pb-[8px]">
                Integration and Compatibility
              </h1>
            </div>
            <div className="flex  lg:w-[100%]  justify-center lg:mt-[56px] mt-[30px]">
              <MainCard
                backgroundImage=""
                imageSrc="/assets/agent/maskimg1.png"
                imageBox="w-[100%] h-auto mt-[30px] lg:px-[103px] lg:py-[46px]"
                imageSrc2=""
                title="Integration Capabilities"
                description="Seamlessly integrates with existing tools and platforms to enhance your current workflows. Cleo&apos;s Discoverability Agent is designed to work harmoniously with your existing infrastructure, ensuring smooth and efficient operations without disrupting your daily processes."
                className="md:h-[340px] flex justify-center items-center"
                imageSrcStyle1="w-[90%] h-[250px]"
                imageSrcStyle2=""
                backgroundMainImage="/assets/cleo/advance-left.png"
              />
            </div>
          </div>
        </section>
        <section className="container-fluid lg:my-[100px] ">
          <div className="xl:w-[1248px] lg:w-[1248px] md:w-[95%] mx-auto  ">
            <div className="p-5">
              <h1 className="text-primary text-center font-bold  text-[24px] leading-[30px] lg:text-[40px] lg:leading-[50px] pb-[8px] mt-[30px]">
                How It Works
              </h1>
            </div>
            <div className="xl:w-[1266px] lg:w-[1248px] md:w-[100%] w-full p-[20px] mx-auto">
              <div className="w-full border border-boxBorderColor rounded-[12px]">
                <Image
                  src={HowWork}
                  alt="mobile image"
                  className="w-[100%] h-[100%]"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="flex justify-center flex-col items-center">
            <h1 className="text-primary text-center lg:mt-[56px] mt-[30px] font-bold text-[24px] leading-[36px] pb-[8px]">
              Roadmap and Future Enhancements
            </h1>
            <p className="lg:w-[60%] md:w-[80%] xl:w-[35%] w-full p-5 text-center text-secondary font-[400] text-[16px] pt-[8px] leading-[24px] pb-[32px]">
              Stay tuned for upcoming features, including enhanced AI insights
              for deeper analysis and more robust integration capabilities to
              further streamline your cloud management processes. We&apos;re
              continually evolving to provide you with cutting-edge solutions
              and improvements that align with your needs and the latest
              industry trends.
            </p>
          </div>
          <div className="flex justify-center mb-[40px]">
            <Button className="bg-primary text-black px-[36px] py-[12px] rounded-[6px] hover:bg-white font-[600]">
              Load More
            </Button>
          </div>
        </section>
        <section className="lg:my-[100px] ">
          <div className="xl:w-[1266px] lg:w-[1248px] md:w-[95%] w-full p-[20px] mx-auto">
            <ReadyToExperience
              name="Unleash Automation with Cleo&apos;s AI Agents"
              desc="Transform your cloud operations with Cleo&apos;s AI agents, designed to automate complex processes and deliver actionable insights."
              descName=""
              headingName=""
              backgroundImage="/assets/agent/linebg.png"
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default page;
