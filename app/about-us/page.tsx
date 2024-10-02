import Tag from "@/components/Tag";
import Image from "next/image";
import React from "react";
import heroimage from "../../public/assets/about-us/Group.svg";
import MiniCard from "@/components/MiniCard";
import separator from "../../public/assets/about-us/vertical-line.svg";
import AboutCard from "@/components/AboutCard";
import blub from "../../public/assets/about-us/fi_16868245.svg";
import colaboration from "../../public/assets/about-us/hand.svg";
import integrity from "../../public/assets/about-us/Group (2).svg";
import excelence from "../../public/assets/about-us/Layer 2.svg";
import techGraph from "../../public/assets/about-us/tectgraph.svg";
import "../style/About.css";
import ImageCard from "@/components/ImageCard";
import ReadyToExperience from "@/components/ReadyToExperience";
const page = () => {
  return (
    <>
      <section className="w-full">
        <section className="clip-path">
          <div className="header-mask w-full  container-fluid">
            <div className="xl:w-[1248px] lg:w-[90%]  mx-auto w-full flex flex-col lg:pt-[194px] md:pt-[130px] pt-[100px]">
              <div className="flex justify-center items-center w-auto">
                <Tag className="" title="About Us" />
              </div>
              <div className="w-full flex justify-center p-3">
                <h1 className="xl:w-[684px] lg:w-[684px] md:w-[500px]  sm:w-[350px] w-[300px] sm:leading-[30px] mx-auto text-[24px] leading-[25px] md:text-[40px]  lg:text-[48px] xl:text-[50px] pt-[16px] md:pt-[20px] lg:pt-[24px] xl:pt-[24px] md:leading-[50px] lg:leading-[60px]lg:leading-[60px] xl:leading-[64px] font-bold text-primary text-center">
                  Empowering the Future of Cloud Security with AI
                </h1>
              </div>
              <p className="xl:w-[509px] lg:w-[509px] md:w-[480px] mx-auto sm:w-[460px] w-[80%] pt-[12px] md:pt-[14px] lg:pt-[16px] xl:pt-[16px] font-[400] text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] leading-[22px] md:leading-[23px] lg:leading-[24px] xl:leading-[24px] text-secondary text-center">
                Indya.ai is revolutionizing digital security through
                intelligence, innovation, and inspiration.
              </p>
            </div>
            <div className="flex xl:w-[1248px] items-start lg:w-[90%] md:w-[87%] w-full mx-auto justify-center mt-[80px]">
              <Image
                src={heroimage}
                alt="mobile image"
                width={863}
                height={786}
              />
            </div>
          </div>
        </section>

        <section className="container-fluid md:px-0 px-[20px]">
          <div className="xl:w-[1248px] lg:w-[90%] md:w-[90%]  mx-auto w-full flex flex-col  pt-[100px]">
            <div className="xl:w-[1248px] lg:w-[90%]  mx-auto w-full flex flex-col pt-[100px]">
              <div className="w-full flex justify-center p-3">
                <h1 className="xl:w-[684px] lg:w-[684px] md:w-[500px]  sm:w-[350px] w-[300px] sm:leading-[30px] mx-auto text-[24px] leading-[25px] md:text-[40px]  lg:text-[48px] xl:text-[50px] pt-[16px] md:pt-[20px] lg:pt-[24px] xl:pt-[24px] md:leading-[50px] lg:leading-[60px]lg:leading-[60px] xl:leading-[64px] font-bold text-primary text-center">
                  Our Journey
                </h1>
              </div>
              <p className="xl:w-[509px] lg:w-[509px] sm:w-[480px] mx-auto  w-[80%] pt-[12px] md:pt-[14px] lg:pt-[16px] xl:pt-[16px] font-[400] text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] leading-[22px] md:leading-[23px] lg:leading-[24px] xl:leading-[24px] text-secondary text-center pb-[20px]">
                We are at the forefront of revolutionizing cloud security with
                AI. Our mission at Indya.ai is to redefine the landscape of
                digital safety through groundbreaking advancements in AI-driven
                cloud security
              </p>
            </div>
            <div className="xl:w-[822px] lg:w-[90%] md:w-[90%] items-center mx-auto w-full flex border border-boxBorderColor sm:p-[64px] rounded-[12px] sm:mt-[56px]">
              <div className="flex flex-col md:flex-row gap-[57px] items-center border-box sm:p-0 p-[30px]">
                <div className="hidden md:flex justify-center md:justify-start items-center h-[250px]">
                  <Image
                    src={separator}
                    alt="separator"
                    width={10}
                    height={352}
                    className="h-[250px]"
                  />
                </div>

                <div className="flex flex-col gap-[44px] w-full">
                  <MiniCard
                    title="2023 - The Beginning"
                    description="Indya.ai was founded with a vision to harness AI for unmatched cloud security."
                    showButton={false}
                    className="w-full border border-boxBorderColor rounded-[12px]"
                  />

                  <MiniCard
                    title="2024 - First Breakthrough"
                    description="Launched our flagship AI Agent, Cleo, setting a new standard in predictive threat detection."
                    showButton={false}
                    className="w-full border border-boxBorderColor rounded-[12px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="xl:w-[1248px] lg:w-[90%]  mx-auto w-full sm:mb-[100px] mb-[20px]">
          <div className="w-full flex justify-center p-3">
            <h1 className="xl:w-[684px] lg:w-[684px] md:w-[500px]  sm:w-[350px] w-[300px] sm:leading-[30px] mx-auto text-[24px] leading-[25px] md:text-[40px]  lg:text-[48px] xl:text-[50px] pt-[16px] md:pt-[20px] lg:pt-[24px] xl:pt-[24px] md:leading-[50px] lg:leading-[60px]lg:leading-[60px] xl:leading-[64px] font-bold text-primary text-center">
              Our Mission & Values
            </h1>
          </div>
          <div className="w-full flex justify-center p-3">
            <h1 className="xl:w-[684px] lg:w-[684px] md:w-[500px]  sm:w-[350px] w-[300px] sm:leading-[30px] mx-auto text-[24px] leading-[25px] md:text-[40px]  lg:text-[48px] xl:text-[50px] pt-[16px] md:pt-[20px] lg:pt-[24px] xl:pt-[24px] md:leading-[50px] lg:leading-[60px]lg:leading-[60px] xl:leading-[64px] font-bold text-primary text-center">
              Mission Statement
            </h1>
          </div>
          <p className="xl:w-[509px] lg:w-[509px] md:w-[480px] mx-auto sm:w-[460px] w-[80%] pt-[12px] md:pt-[14px] lg:pt-[16px] xl:pt-[16px] font-[400] text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] leading-[22px] md:leading-[23px] lg:leading-[24px] xl:leading-[24px] text-secondary text-center">
            We are at the forefront of revolutionizing cloud security with AI.
            Our mission at Indya.ai is to redefine the landscape of digital
            safety through groundbreaking advancements in AI-driven cloud
            security.
          </p>
        </section>
        <section className="xl:w-[1300px] lg:w-[90%] mx-auto w-full">
          <div className="w-full flex justify-center">
            <h1 className="xl:w-[684px] lg:w-[684px] md:w-[500px]  sm:w-[350px] w-[300px] sm:leading-[30px] mx-auto text-[24px] leading-[25px] md:text-[40px]  lg:text-[48px] xl:text-[50px] pt-[16px] md:pt-[20px] lg:pt-[24px] xl:pt-[24px] md:leading-[50px] lg:leading-[60px] xl:leading-[64px] pb-[30px] font-bold text-primary text-center">
              Our Values
            </h1>
          </div>
          <div className="flex justify-center gap-[30px] flex-wrap sm:pt-[56px]  sm:mb-[101px]">
            <AboutCard
              imageSrc={blub}
              imageAlt="Hand collaboration image"
              title="Inovation"
              description="We believe in pushing boundaries and continuously exploring new possibilities to stay ahead in the AI and cybersecurity landscape."
              cardWidth="w-[300px]"
              cardHeight="h-[300px]"
              titleClassName="text-[22px] font-bold text-primary"
              descriptionClassName="text-[16px] text-secondary"
            />
            <AboutCard
              imageSrc={colaboration}
              imageAlt="Hand collaboration image"
              title="Collaboration"
              description="We value diverse perspectives and foster a culture of teamwork and mutual respect, driving success through collective intelligence."
              cardWidth="w-[300px]"
              cardHeight="h-[300px]"
              titleClassName="text-[22px] font-bold text-primary"
              descriptionClassName="text-[16px] text-secondary"
            />
            <AboutCard
              imageSrc={integrity}
              imageAlt="Hand collaboration image"
              title="Integrity"
              description="We uphold transparency, honesty, and ethical practices in all our endeavors, ensuring trust and reliability in our solutions."
              cardWidth="w-[300px]"
              cardHeight="h-[300px]"
              titleClassName="text-[22px] font-bold text-primary"
              descriptionClassName="text-[16px] text-secondary pb-[20px]"
            />
            <AboutCard
              imageSrc={excelence}
              imageAlt="Hand collaboration image"
              title="Excellence"
              description="We strive for excellence in every project, delivering high-quality solutions and services that exceed expectations."
              cardWidth="w-[300px]"
              cardHeight="h-[300px]"
              titleClassName="text-[22px] font-bold text-primary"
              descriptionClassName="text-[16px] text-secondary pb-[20px]"
            />
          </div>
        </section>
        <section className="container-fluid   md:p-0 p-[20px]">
          <div className="xl:w-[1248px] lg:w-[90%]  mx-auto w-full flex flex-col  sm:pt-[100px] ">
            <div className="w-full flex justify-center p-3">
              <h1 className="xl:w-[684px] lg:w-[684px] md:w-[500px]  sm:w-[350px] w-[300px] sm:leading-[30px] mx-auto text-[24px] leading-[25px] md:text-[40px]  lg:text-[48px] xl:text-[50px]  md:leading-[50px] lg:leading-[60px]lg:leading-[60px] xl:leading-[64px] font-bold text-primary text-center">
                Innovation & Technology
              </h1>
            </div>
            <p className="xl:w-[309px] lg:w-[339px] md:w-[320px] mx-auto sm:w-[360px] w-[53%] pt-[12px] md:pt-[14px] lg:pt-[16px] xl:pt-[16px] font-[400] text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] leading-[22px] md:leading-[23px] lg:leading-[24px] xl:leading-[24px] text-secondary text-center">
              Explain the technology behind your solutions and what sets it
              apart.
            </p>
          </div>
          <div className="tech-mask xl:w-[1248px] lg:w-[90%]  mx-auto w-full  border border-boxBorderColor rounded-[12px] sm:mt-[56px] mt-[20px] sm:p-[64px] p-[30px]">
            <h1 className="px-[10px] lg:w-[684px] xl:w-[881px] mx-auto text-[8px] leading-[12px] sm:text-[14px] sm:leading-[15px] md:text-[28px] lg:text-[24px] xl:text-[24px] md:leading-[34px] lg:leading-[30px] xl:leading-[36px] font-bold text-primary text-center">
              Built from the ground up with AI, our solutions are designed to
              adapt, learn, and evolve, ensuring robust security in an
              ever-changing digital landscape.
            </h1>
            <div className="flex justify-center sm:mt-[56px] mt-[20px]">
              <Image
                src={techGraph}
                alt="mobile image"
                width={972}
                height={320}
              />
            </div>
          </div>
        </section>
        <section className="xl:w-[1248px] lg:w-[90%]  mx-auto w-full sm:my-[100px] my-[20px] md:px-0 p-[20px]">
          <div className="w-full flex justify-center p-3">
            <h1 className="xl:w-[684px] lg:w-[684px] md:w-[500px]  sm:w-[350px] w-[300px] sm:leading-[30px] mx-auto text-[24px] leading-[25px] md:text-[40px]  lg:text-[48px] xl:text-[50px] pt-[16px] md:pt-[20px] lg:pt-[24px] xl:pt-[24px] md:leading-[50px] lg:leading-[60px]lg:leading-[60px] xl:leading-[64px] font-bold text-primary text-center">
              Why Indya.ai?
            </h1>
          </div>
          <p className="xl:w-[409px] lg:w-[509px] md:w-[480px] mx-auto sm:w-[460px] w-[80%] pt-[12px] md:pt-[14px] lg:pt-[16px] xl:pt-[16px] font-[400] text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] leading-[22px] md:leading-[23px] lg:leading-[24px] xl:leading-[24px] text-secondary text-center">
            Highlight the unique benefits and competitive advantages of your
            solutions.
          </p>
          <h4 className="text-[20px] text-center sm:w-[64%]  font-[600] text-primary mx-auto pt-[56px] pb-[40px] leading-[30px]">
            We combine industry-leading AI technology with a deep understanding
            of cloud environments to offer unparalleled security solutions.
          </h4>
          <div className="flex flex-col gap-[32px] sm:flex-wrap md:flex-wrap md:items-center lg:flex-row lg:justify-between h-auto">
            <ImageCard
              backgroundImage=""
              imageSrc="/assets/about-us/groupai.svg"
              imageSrc2=""
              title="AI-Native Approach"
              description="Our solutions are built on an AI-first foundation, ensuring that every aspect of our security offerings leverages advanced machine learning."
              className="w-full h-[300px] sm:w-[605px] md:mx-auto lg:w-[47%] ml-0 mr-0 flex flex-col gap-[32px]"
              imageSrcStyle1="w-[100%] absolute bottom-0"
              imageSrcStyle2=""
              backgroundMainImage=""
            />

            <ImageCard
              backgroundImage="/assets/about-us/mask2g.svg"
              imageSrc=""
              imageSrc2="/assets/cleo/discovered.png"
              title="Cloud-Native Design"
              description="Indya.ai is designed to seamlessly integrate with cloud environments, whether you're using AWS, Azure, GCP, or a hybrid setup."
              className="w-full sm:w-[605px] md:mx-auto lg:w-[47%] h-[420px] ml-0 mr-0 bg-cover bg-center bg-no-repeat"
              imageSrcStyle1=""
              imageSrcStyle2=""
              backgroundMainImage=""
            />

            <ImageCard
              backgroundImage="/assets/about-us/mask4g.svg"
              imageSrc=""
              imageSrc2=""
              title=""
              description=""
              className="w-full sm:w-[605px] md:mx-auto lg:w-[47%] h-[420px] ml-0 mr-0"
              imageSrcStyle1=""
              imageSrcStyle2=""
              backgroundMainImage=""
            />

            <ImageCard
              backgroundImage="/assets/about-us/maskg.svg"
              imageSrc=""
              imageSrc2=""
              title="Discoverability Agent"
              description="Indya.ai automates routine security tasks, enabling your team to focus on strategic initiatives. From automated incident response."
              className="w-full sm:w-[605px] md:mx-auto lg:w-[47%] h-[420px] ml-0 mr-0"
              imageSrcStyle1=""
              imageSrcStyle2=""
              backgroundMainImage=""
            />
          </div>
        </section>
        <section className="flex justify-center xl:w-[1300px] lg:w-[90%]  mx-auto w-full md:p-0 p-[20px]">
          <ReadyToExperience
            backgroundImage="/assets/about-us/cardbg.svg"
            headingName="custom-heading-class"
            descName="custom-description-class"
            name="Join Us in Shaping the Future"
            desc="Whether you're looking to secure your digital environment, join a forward-thinking team, or partner with us, we welcome you to connect with Indya.ai."
            contactSalesText="Contact Us"
            demoText="View Careers"
            showExploreSolutions={true}
          />
        </section>
      </section>
    </>
  );
};

export default page;
