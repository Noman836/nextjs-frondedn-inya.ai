import React from "react";
import "../style/solutions.css";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Tag from "@/components/Tag";
import heroImage from "../../public/assets/solutions/maskimage.png";
import SolutionCard from "@/components/SolutionCard";
import VerticalCard from "@/components/VerticalCard";
import ReadyToExperience from "@/components/ReadyToExperience";
import ProfileCard from "@/components/ProfileCard";

const page = () => {
  return (
    <>
      <section className="main-container container-fluid h-auto">
        <div className="shadow w-full container-fluid">
          <div className="container flex flex-col lg:pt-[194px] md:pt-[130px] pt-[100px]">
            <div className="flex justify-center items-center">
              <Tag className="" title="Solutions" />
            </div>
            <div className="w-full flex justify-center">
              <h1 className="lg:w-1/2 text-[24px] leading-[25px] md:text-[40px]  lg:text-[48px] xl:text-[50px] pt-[16px] md:pt-[20px] lg:pt-[24px] xl:pt-[24px] md:leading-[50px] lg:leading-[60px] xl:leading-[64px] font-bold text-primary text-center">
                Transforming Cloud Security Across Industries
              </h1>
            </div>
            <p className="w-[100%] md:w-[35%] mx-auto pt-[12px] md:pt-[14px] lg:pt-[16px] xl:pt-[16px] font-[400] text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] leading-[22px] md:leading-[23px] lg:leading-[24px] xl:leading-[24px] text-primary text-center">
              Discover how Cleo and our AI Agents deliver unparalleled security
              solutions tailored to your industry and unique needs.
            </p>
            <div className="flex justify-center items-center gap-[16px] mt-[32px]">
              <Button className="bg-primary rounded-[6px] px-[36px] py-[12px] text-colorBlack text-[16px] leading-[24px] hover:bg-primary font-[600] active:bg-primary">
                Explore Solutions
              </Button>
            </div>
          </div>
          <div className="flex justify-center mt-[80px] p-3 ">
            <Image
              src={heroImage}
              alt="mobile image"
              width={1248}
              height={793}
            />
          </div>
        </div>
      </section>
      <section className="container lg:mt-[100px] md:mt-[90px] mt-[30px]">
        <div className="flex flex-col items-center gap-3 lg:pt-[100px] pb-10">
          <h2 className="text-primary text-center font-bold lg:text-[40px] md:text-[30px] text-[24px] leading-[50px]">
            Solutions by Industry
          </h2>
          <p className="lg:w-[35%] w-full text-primary text-center font-[400] text-[16px] leading-[24px]">
            For each industry, provide a detailed description, relevant
            features, benefits, and a real-world example.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <SolutionCard />
          <div className="lg:flex lg:flex-row flex-col gap-2">
            <VerticalCard
              tagClass="lg:w-[220px]"
              title="Protect Patient Data with Cutting-Edge Security"
              description="Healthcare organizations handle vast amounts of sensitive patient data that require robust security measures. Cleo ensures data confidentiality, integrity, and availability while maintaining compliance with healthcare regulations."
              tag1="Industry 2: Healthcare"
              tag2="Learn More About Healthcare Solutions"
              features={[
                "Predictive Analysis",
                "Compliance Management",
                "Cost Optimization Agent",
              ]}
              benefits={[
                "Protect Customer Data and Transactions",
                "Automate compliance with data protection laws",
                "Optimize costs while maintainig robust security",
              ]}
              backgroundImage="/assets/solutions/card1.png"
            />

            <VerticalCard
              tagClass="lg:w-[230px]"
              title="Safeguard E-commerce Transactions and Data"
              description="Online retailers face unique security challenges, including protecting customer data and preventing fraud. Cleo offers comprehensive security measures designed to keep your e-commerce platform secure and your customers' data safe."
              tag1="Industry 3: E-commerce"
              tag2="Learn More About E-commerce Solutions"
              features={[
                "Automated Incident Response",
                "Continuous Learning and Adaptations",
                "Natural Language and Interface",
              ]}
              benefits={[
                "Ensure HIPAA compliance with automated checks",
                "Safeguard patient data against cyber threats",
                "Streamline security operations with AI-driven insights",
              ]}
              backgroundImage="/assets/solutions/card2.png"
            />
          </div>
        </div>
      </section>
      <div className="container-fluid shadowleft">
      <div className="container-fluid shadoweft">
      <section className="container lg:mt-[100px] ">
        <div className="flex flex-col items-center gap-3 lg:pt-[100px] pb-10">
          <h2 className="text-primary text-center font-bold lg:text-[40px] md:text-[30px] text-[24px] leading-[50px]">
            Solutions by Use Case
          </h2>
          <p className="lg:w-[35%] w-full text-primary text-center font-[400] text-[16px] leading-[24px]">
            For each use case, provide a brief description, relevant features,
            benefits, and how Cleo&apos;s AI can solve that particular problem.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="lg:flex lg:flex-row flex-col gap-3">
            <VerticalCard
            tagClass="lg:w-[260px]"
              title="Proactive Threat Detction with AI"
              description="Identify and respond to threats in real-time with Cleo's advanced AI algorithms. Our solution continuously monitors your cloud environment, detecting anomalies before they become 
critical issues."
              tag1="Use Case 1: Threat Detection"
              tag2="Discover More About Threat Detection "
              features={[
                "Real Time Threat Detection",
                "Predictive Analysis",
                "Intelligent Alert Prioritization",
              ]}
              benefits={[
                "Reduce the impact of security incidents",
                "Proactively address emerging threats",
                "Minimize false positives and alert fatigue",
              ]}
              backgroundImage="/assets/solutions/card1.png"
            />
            <VerticalCard
             tagClass="lg:w-[330px]"
              title="Automate Compliance and Mitigate Risks"
              description="Stay ahead of regulatory requirements with Cleo’s automated compliance checks. Our AI ensures your cloud environments adhere to industry standards, reducing the risk of costly non-compliance penalties."
              tag1="Use Case 2: Compliance Management"
              tag2="Learn More about Compliance Management"
              features={[
                "Compliance Management",
                "Continuous Learning and Adaptation",
                "Natural Language Interface",
              ]}
              benefits={[
                "Ensure continuous compliance with regulatory standards",
                "SSave time and resources with automated compliance checks",
                "Get easy-to-understand compliance reports",
              ]}
              backgroundImage="/assets/solutions/card2.png"
            />
          </div>
          <SolutionCard />
        </div>
      </section>
      </div>
      </div>
      <div className="container-fluid shadowright"> 
      <section className="container-fluid">
        <ProfileCard/> 
      </section>
    
      <section className="container lg:mt-[100px] md:mt-[90px] mt-[200px]">
        <ReadyToExperience backgroundImage="/assets/solutions/mask3.png" headingName="" descName="lg:w-[36%]" name="Ready to Secure Your Cloud?" desc="Transform your cloud operations with Cleo's AI agents, designed to automate complex processes and deliver actionable insights."/>
      </section>
      </div>
      <hr className="container lg:w-full md:w-full w-[80%] lg:mt-[60px]  bg-boxBorderColor h-[1px] border-0" />
    </>
  );
};

export default page;
