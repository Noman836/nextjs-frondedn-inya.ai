import "../app/style/Footer.css";
import facebook from "../public/assets/socialIcons/facebook(5).svg";
import x from "../public/assets/socialIcons/twitter(7).svg";
import instagram from "../public/assets/socialIcons/Layer 2.svg";
import linkedIn from "../public/assets/socialIcons/Group.svg"
import down from "../public/assets/cleo/down.png";
import check from "../public/assets/cleo/check.png";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <footer className="container-fluid footer  p-3">
        <div className="lg:w-red-100 xl:w-[1252px] lg:w-[90%] md:w-[95%] mx-auto  lg:flex-nowrap lg:justify-center flex flex-wrap lg:flex lg:flex-row md:flex-row lg:pt-[59px] pt-[30px]">
          <div className="flex flex-col lg:w-1/4 w-1/2 mb-5">
            <ul>
              <li className="font-bold text-primary pb-5">Products</li>
              <li className="hover:underline cursor-pointer text-secondary hover:text-primary pb-[8px]">Cleo</li>
              <li className="hover:underline cursor-pointer text-secondary hover:text-primary  pb-[8px]">AI Agents</li>
              <li className="hover:underline cursor-pointer text-secondary hover:text-primary ">Integration</li>
            </ul>
          </div>
          <div className="flex flex-col lg:w-1/4 w-1/2 mb-5">
            <ul>
              <li className="font-bold hover:underline cursor-pointer text-secondary hover:text-primary  pb-5">Solution</li>
              <li className="hover:underline cursor-pointer text-secondary hover:text-primary  pb-[8px]">By Industry</li>
              <li className="hover:underline cursor-pointer text-secondary hover:text-primary pb-[8px]">By Use Case</li>
            </ul>
          </div>
          <div className="flex flex-col lg:w-1/4 w-1/2 mb-5">
            <ul>
              <li className="font-bold text-primary pb-5">Resources</li>
              <li className="hover:underline cursor-pointer text-secondary hover:text-primary  pb-[8px]">Blog</li>
              <li className="hover:underline cursor-pointer text-secondary hover:text-primary  pb-[8px]">Witepapers</li>
              <li className="hover:underline cursor-pointer text-secondary hover:text-primary  pb-[8px]">Case Studies</li>
              <li className="hover:underline cursor-pointer text-secondary hover:text-primary  pb-[8px]">Webinars</li>
              <li className="hover:underline cursor-pointer text-secondary hover:text-primary  pb-[8px]">EBooks</li>
            </ul>
          </div>
          <div className="flex flex-col lg:w-1/4 w-1/2 mb-5">
            <ul>
              <li className="font-bold text-primary pb-5">Company</li>
              <li className="hover:underline cursor-pointer text-secondary hover:text-primary  pb-[8px]">About Us</li>
              <li className="hover:underline cursor-pointer text-secondary hover:text-primary  pb-[8px]">Careers</li>
              <li className="hover:underline cursor-pointer text-secondary hover:text-primary  pb-[8px]">Partners</li>
              <li className="hover:underline cursor-pointer text-secondary hover:text-primary  pb-[8px]">Customers</li>
              <li className="hover:underline cursor-pointer text-secondary hover:text-primary  pb-[8px]">Contact</li>
            </ul>
          </div>
          <div className="w-1/2 flex flex-col lg:w-1/4 mb-5">
            <ul>
              <li className="font-bold text-primary pb-5">Legal</li>
              <li className="hover:underline cursor-pointer text-secondary hover:text-primary  pb-[8px]">Privacy Policy</li>
              <li className="hover:underline cursor-pointer text-secondary hover:text-primary  pb-[8px]">Term of Services</li>
              <li className="hover:underline cursor-pointer text-secondary hover:text-primary  pb-[8px]">Security</li>
            </ul>
          </div>
          <div className="w-1/2 flex flex-col lg:w-1/4 mb-5">
            <ul>
              <li className="font-bold text-primary pb-5">Others</li>
              <li className="hover:underline cursor-pointer text-secondary hover:text-primary  pb-[8px]">Product Preview</li>
              <li className="hover:underline cursor-pointer text-secondary hover:text-primary  pb-[8px]">Affiliatea</li>
            </ul>
          </div>
        </div>
        <hr className="xl:w-[1352px] lg:w-[90%] lg:mx-auto md:w-[90%] mx-auto sm:w-[80%] w-[80%] lg:mt-[60px]  bg-boxBorderColor h-[1px] border-0" />
        <div className="xl:flex lg:w-red-100 xl:w-[1252px] mx-auto lg:w-[90%] xl:flex-row lg:flex-row lg:flex lg:mt-[35px] mt-[25px] lg:justify-between lg:items-center md:flex  md:items-center  md:flex-col ">
          <div className="">
            <h2 className="text-[20px]  text-primary font-bold leading-[30px]">
              We protect your security and privacy.
            </h2>
          </div>
          <div className=" gap-[28px] lg:justify-center xl:justify-start xl:flex md:flex  md:justify-center ]">
            <div className="flex items-center gap-[4px] lg:pb-0 lg:pt-0 md:pt-5 pb-2">
              <span className="text-primary font-[400] flex text-[16px] leading-[24px]">
                {" "}
                <Image
                  src={check}
                  alt="Contact Us Image"
                  width={16}
                  height={16}
                />
                SOC2
              </span>
              <span className="text-secondary font-[400] text-[14px] leading-[21px]">
                Certified
              </span>
            </div>
            <div className="flex items-center gap-[4px] lg:pb-0 pb-2">
              <span className="text-primary font-[400] flex text-[16px] leading-[24px]">
                {" "}
                <Image
                  src={check}
                  alt="Contact Us Image"
                  width={16}
                  height={16}
                />
                GDPR
              </span>
              <span className="text-secondary font-[400] text-[14px] leading-[21px]">
                Complaint
              </span>
            </div>
            <div className="flex items-center gap-[4px] lg:pb-0 pb-2">
              <span className="text-primary font-[400] flex text-[16px] leading-[24px]">
                {" "}
                <Image
                  src={check}
                  alt="Contact Us Image"
                  width={16}
                  height={16}
                />
                HIPAA
              </span>
              <span className="text-secondary font-[400] text-[14px] leading-[21px]">
                Complaint
              </span>
            </div>
            <div className="flex items-center gap-[4px] lg:pb-0 pb-2">
              <span className="text-primary font-[400] text-[16px] flex leading-[24px]">
                <Image
                  src={check}
                  alt="Contact Us Image"
                  width={16}
                  height={16}
                />
                ISO 27001
              </span>
              <span className="text-secondary font-[400] text-[14px] leading-[21px]">
                Certified
              </span>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:items-center flex flex-row justify-center gap-[16px] lg:mt-0 mt-2">
              <Image
              className="cursor-pointer"
                src={facebook}
                alt="Contact Us Image"
                width={24}
                height={24}
              />
              <Image src={x} alt="Contact Us Image"     className="cursor-pointer" width={24} height={24} />
              <Image
                src={instagram}
                    className="cursor-pointer"
                alt="Contact Us Image"
                width={24}
                height={24}
              />
              <Image
                  className="cursor-pointer"
                src={linkedIn}
                alt="Contact Us Image"
                width={24}
                height={24}
              />
          </div>
        </div>
        <div className="md:w-[95%] lg:w-red-100 xl:w-[1352px] lg:w-[93%] mx-auto  lg:h-[80px] lg:mt-[51px] mt-[31px] mb-3 flex justify-between items-center bg-navBgColor lg:px-[48px]  lg:py-[16px] py-[8px] px-[16px] h-[50px] rounded-[72px]">
          <div className="text-primary font-secondary font-[700] lg:text-[32px] text-[16px] leading-[48px]">
            inya.ai
          </div>
          <div className="text-secondary lg:text-[14px] md:text-[14px] sm:text-[10px] text-[8px] font-[400] leading-[21px]">
            © 2024 indya.ai. All rights reserved.
          </div>
          <div className="text-primary font-secondary text-[16px] font-[400] leading-[24px] flex items-center gap-[11px]">
            Legal{" "}
            <span>
              <Image src={down} alt="Contact Us Image" width={16} height={16} />
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
