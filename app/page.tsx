"use client";
import Image from "next/image";
import "../app/style/Home.css";
import HeroLogo from "../public/assets/hero.png";
import ShinyButton from "@/components/magicui/shiny-button";
import { BorderBeam } from "@/components/magicui/border-beam";
import Group from "../public/assets/group.png";
import { Button } from "@/components/ui/button";
import Card from "@/components/Card";
import AnimatedCard from "@/components/AnimatedCard";
import SectionLayout from "@/components/SectionLayout";

export default function Home() {
  return (
    <section className="hero-section w-full h-auto">
      <div className="flex justify-center py-[140px] flex-col items-center ">
        <Image src={HeroLogo} alt="Contact Us Image" width={350} height={400} />
        {/* <BorderBeam /> */}
        <div className="">
          <h3 className="border border-boxBorderColor text-secondary bg-boxbgColor text-center px-[20px] py-[8px] rounded-[20px]">
            Transform Cloud Security with Cleo’s Advanced AI
          </h3>
        </div>
        <div className="w-2/4 py-[24px]">
          <h2 className="text-center text-[50px] font-[700] leading-[64px] text-primary">
            AI-Driven Cloud Security, <br /> Reimagined
          </h2>
        </div>
        <div className="">
          <h3 className="text-center font-[400] text-[16px] text-secondary ">
            Empowering Businesses with Next-Gen Threat Detection, Seamless{" "}
            <br /> Compliance, and Intelligent Optimisation.
          </h3>
        </div>
        <div className="pt-[44px] mb-[44px]">
          <ShinyButton
            text="Get Early Access"
            className="bg-primary rounded-[6px] px-[36px] py-[12px] text-black hover:text-white"
          />
        </div>
        <div className="xl:pt-[100px]  w-full flex justify-center relative curve-image">
          {/* <BorderBeam /> */}
          <div className="w-3/4 p-10 border border-boxBorderColor rounded-[10px] flex flex-col items-center relative top-[100px] gap-5 text-black">
            <Button className="text-[14px] font-[400] text-primary bg-boxbgColor border border-boxBorderColor px-[20px] py-[6px] rounded-[30px]">
              Feature
            </Button>
            <h3 className="w-2/3 text-center text-[40px] font-[700] leading-[50px] text-primary">
              Comprehensive Cloud Security Management Solutions
            </h3>
            <h2 className="w-2/3 text-center font-[400] leading-[24px] text-[24px] text-primary">
              Real-time threat detection, automated compliance checks, and
              robust data encryption for your cloud environment.
            </h2>
            <Image src={Group} alt="Contact Us Image" />
            <BorderBeam />
          </div>
        </div>
      </div>
      <section className="container w-3/4 h-auto p-5 border border-boxBorderColor rounded-[10px]">
        <div className="flex mb-4 gap-[20px] w-full h-[500px]">
          <Card
            iconClass="fa-solid fa-magnifying-glass"
            title="Detect under 2 seconds"
            backgroundImage="/assets/mask-1.png" 
          />
          <AnimatedCard
            title="Detect under 2 seconds"
            description="Monitor and neutralize threats instantly with our real-time AI technology. Detects and mitigates threats in under 2 seconds."
          />
        </div>
        <div className="flex mb-4 gap-[20px] w-full h-[500px]">
          <AnimatedCard
            title="99% Compliance accuracy"
            description="Ensure compliance with GDPR, HIPAA, PCI DSS, and more, automatically. Achieve 99% compliance accuracy."
          />
          <Card
            iconClass="fa-solid fa-magnifying-glass"
            title="Automated Compliance"
            backgroundImage="/assets/mask-b.png" 
          />
        </div>

        {/* Third Row */}
        <div className="flex gap-[20px] mb-4 w-full h-[500px]">
          <Card
            iconClass="fa-solid fa-magnifying-glass"
            title="AI-Driven Insights"
            backgroundImage="/assets/mask-1.png" 
          />
          <AnimatedCard
            title="1M data points analysed per second"
            description="Gain actionable insights and predictive analytics to stay ahead of threats. Over 1 million data points analysed per second."
          />
        </div>
      </section>
      <section className="container w-3/4 p-5 border border-boxBorderColor mt-5 rounded-[10px]">
        <SectionLayout/>
      </section>
    </section>
  );
}
