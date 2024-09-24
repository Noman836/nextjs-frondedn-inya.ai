import Image from "next/image";
import React from "react";
import imageBlog from "../../public/assets/blog-post/frameblog.png";
import Tag from "@/components/Tag";
import facebook from "../../public/assets/socialIcons/facebook(5).png";
import x from "../../public/assets/socialIcons/Group (1).png";
import instagram from "../../public/assets/socialIcons/Layer 2.png";
import linkedIn from "../../public/assets/socialIcons/Group (2).png";

const BlogPage = () => {
  return (
    <section className="container-fluid h-auto lg:pt-[94px] md:mt-[130px] mt-[120px]">
      <main className="container p-0">
        {/* Blog Title */}
        <h1 className="lg:pl-[170px] md:pl-[42px] pl-[20px] lg:w-[50%] md:w-1/2 w-full text-primary font-bold lg:text-[50px] lg:leading-[64px] md:text-[45px] md:leading-[55px] text-[25px] leading-[30px] text-left">
          Implement Advanced Threat  Detection
        </h1>

        {/* Blog Header Information */}
        <div className="container lg:w-[80%] w-[100%] lg:flex lg:flex-row  md:flex md:flex-col flex flex-col gap-[93px]">
          <div className="lg:w-[65%] w-full flex flex-col h-auto">
            {/* Author and Date */}
            <div className="flex text-primary gap-[8px] lg:mt-[16px] md:mt-[14px] mt-[8px]">
              <span className="text-primary font-[400] text-[16px] leading-[24px]">
                Joel Olawanle
              </span>
              |
              <span className="text-primary font-[400] text-[16px] leading-[24px]">
                Published: July 12, 2024
              </span>
            </div>

            {/* Blog Image */}
            <div className="lg:mt-[32px] md:mt-[30px] w-full my-[18px]">
              <Image
                src={imageBlog}
                alt="Blog cover depicting advanced threat detection"
                width={715}
                height={368}
                className="rounded-[12px]"
              />
            </div>

            {/* Blog Content */}
            <article className="text-primary mt-[20px] w-full">
              <p className="text-primary font-[400] text-[16px] leading-[24px]">
                Determine the scope of monitoring. Decide which systems,
                applications, and data need to be monitored. Identify types of
                threats like malware, phishing, data breaches, insider threats,
                and zero-day vulnerabilities.
              </p>
              <p className="text-primary font-[400] text-[16px] leading-[24px] lg:mt-[16px] md:pt-[14px] mt-[8px]"> 
                Deploy sensors and agents to collect data. Use network taps or
                port mirroring for network traffic monitoring. Set up log
                collection from various sources such as firewalls, IDS/IPS, and
                operating systems.
              </p>

              {/* Section 1 */}
              <h2 className="font-bold lg:mt-[32px] md:mt-[30px] md:mb-[30px] lg:mb:[32px] mb-[16px] lg:text-[32px] md:text-[30px] text-[18 px] leading-[48px]">1. Data Collection and Monitoring</h2>
              <p className="text-primary font-[400] text-[16px] leading-[24px]">
                Log Collection: Gather logs from cloud platforms, network
                devices, endpoints, and applications. Real-time monitoring helps
                detect suspicious activities as they happen. Anomaly detection
                can identify deviations from normal behavior using machine
                learning models.
              </p>
              <p className="text-primary font-[400] text-[16px] leading-[24px] lg:mt-[16px] md:mt-[14px] mt-[8px]">
              Sources Collect logs from cloud services (AWS, Azure, GCP), on-premises infrastructure, firewalls, intrusion detection/prevention systems (IDS/IPS), endpoint security solutions, and applications. Methods Use agents, APIs, or network traffic analysis to gather data. Ensure comprehensive coverage to avoid blind spots.
              Storage and Management Implement a centralized log management system to store and manage collected logs, ensuring they are accessible for analysis.
              </p>
              {/* Section 2 */}
              <h2 className="font-bold lg:mt-[32px] md:mt-[30px] mt-[16px] md:mb-[30px] lg:mb:[32px] mb-[16px] lg:text-[32px] md:text-[30px] text-[18 px]leading-[48px]">2. Threat Intelligence Integration</h2>
              <p className="text-primary font-[400] text-[16px] leading-[24px]">
              Sources Subscribe to commercial, open-source, and government-provided threat intelligence feeds. Types of Intelligence Include information on malware, phishing campaigns, threat actor profiles, and vulnerabilities. Integration Use platforms like MISP (Malware Information Sharing Platform) or Threat Connect to aggregate and manage threat intelligence data.
              </p>
              <p className="text-primary font-[400] text-[16px] leading-[24px] lg:mt-[16px] md:mt-[14px] mt-[8px]                                                                                                                                 ">
              Automation Automatically match IoCs from threat intelligence feeds with internal logs and data. This helps in identifying known malicious IPs, domains, file hashes, etc. Contextualization Enrich alerts with contextual information from threat intelligence to prioritize and respond more effectively.
              </p>
              {/* Section 3 */}
              <h2 className="font-bold lg:mt-[32px] md:mt-[30px] md:mb-[30px] lg:mb:[32px] mb-[16px] lg:text-[32px] md:text-[30px] text-[18 px] leading-[48px]">3. Detection and Response Mechanisms</h2>
              <p className="text-secondary font-[500] text-[18px] leading-[27px] lg:mb-[16px] md:mb-[14px] mb-[8px]">Signature-Based Detection:</p>
              <ul className="list-disc ml-6">
                <li  className="text-secondary font-[500] text-[16px] leading-[24px] lg:my-[16px] md:my-[14px] my-[8px]">
                  Use rule engines like Snort or Suricata to detect threats
                  based on known signatures.
                </li>
                <li  className="text-secondary font-[500] text-[16px] leading-[24px] lg:my-[16px] md:my-[14px] my-[8px]">Keep signature databases updated regularly.</li>
              </ul>

              <p className="text-secondary font-[500] text-[18px] leading-[27px] lg:my-[16px] md:my-[14px] my-[8px]">Behavioral Analysis:</p>
              <ul className="list-disc ml-6">
                <li className="text-secondary font-[500] text-[16px] leading-[24px] lg:my-[16px] md:my-[14px] my-[8px]">
                  Implement User and Entity Behavior Analytics (UEBA) to detect
                  abnormal behavior, which could indicate insider threats or
                  compromised accounts.                                                                                                                                                                                                             
                </li>
                <li  className="text-secondary font-[500] text-[16px] leading-[24px] lg:my-[16px] md:my-[14px] my-[8px]">
                  Advanced analytics can identify patterns like lateral movement
                  or data exfiltration, indicating sophisticated threats.
                </li>
              </ul>

              <p className="text-secondary font-[500] text-[18px] leading-[27px] lg:my-[16px] md:my-[14px] my-[8px]">Incident Response Playbooks</p>
              <ul className="list-disc ml-6">
                <li className="text-secondary font-[500] text-[16px] leading-[24px] lg:my-[16px] md:my-[14px] my-[8px]">
                Standard Operating Procedures (SOPs): Develop SOPs for different types of incidents (e.g., malware outbreak, phishing attack, data breach).                                                                                                                                                                                                            
                </li>
                <li  className="text-secondary font-[500] text-[16px] leading-[24px] lg:my-[16px] md:my-[14px] my-[8px]">
                Automation: Automate response actions, such as isolating infected systems or blocking malicious IPs, to minimize response time.
                </li>
              </ul>

              {/* Section 4 */}
              <h2 className="font-bold lg:mt-[32px] md:mt-[30px] md:mb-[30px] lg:mb:[32px] mb-[16px] lg:text-[32px] md:text-[30px] text-[18 px] leading-[48px]">4. Alerting and Reporting</h2>
              <p  className="text-primary font-[400] text-[16px] leading-[24px] lg:mt-[16px] md:mt-[14px] mt-[8px] ">
                Configure alerts based on threat severity and set up
                notification channels such as email, SMS, or communication tools
                like Slack. Use correlation rules to link events and reduce
                false positives.
              </p>
              <p  className="text-primary font-[400] text-[16px] leading-[24px] lg:mt-[16px] md:mt-[14px] mt-[8px] ">
              Correlation Rules Use correlation engines to link related events and identify complex attack scenarios. False Positive Reduction Implement techniques to minimize false positives, such as tuning detection rules and applying contextual information.
              </p>

              {/* Section 5 */}
              <h2 className="font-bold lg:mt-[32px] md:mt-[30px] md:mb-[30px] lg:mb:[32px] mb-[16px] lg:text-[32px] md:text-[30px] text-[18 px] leading-[48px]">5. Integration with Security Tools</h2>
              <p className="text-secondary font-[500] text-[18px] leading-[27px] lg:my-[16px] md:my-[14px] my-[8px]">SIEM Integration:</p>
              <ul className="list-disc ml-6">
                <li  className="text-secondary font-[500] text-[16px] leading-[24px] lg:my-[16px] md:my-[14px] my-[8px]">
                Centralized Monitoring: Use SIEM platforms like Splunk, QRadar, or LogRhythm for centralized log collection, analysis, and correlation.
                </li>
                <li  className="text-secondary font-[500] text-[16px] leading-[24px] lg:my-[16px] md:my-[14px] my-[8px]">
                Advanced Analytics: Leverage SIEM for advanced threat detection capabilities, including correlation, machine learning, and UEBA.
                </li>
              </ul>

              <p className="text-secondary font-[500] text-[18px] leading-[27px] lg:my-[16px] md:my-[14px] my-[8px]">SOAR Integration:</p>
              <ul className="list-disc ml-6">
              <li  className="text-secondary font-[500] text-[16px] leading-[24px] lg:my-[16px] md:my-[14px] my-[8px]">
              Automation: Use SOAR platforms like Palo Alto Networks Cortex XSOAR or IBM Resilient to automate and orchestrate incident response workflows.
                </li>
                <li  className="text-secondary font-[500] text-[16px] leading-[24px] lg:my-[16px] md:my-[14px] my-[8px]">
                Playbooks: Develop and execute playbooks that automate responses to common incidents, such as phishing or malware infections.
                </li>
              </ul>
            </article>
          </div>

          {/* Sidebar or Additional Content */}
          <div className="lg:w-[35%] md:w-full md:h-[377] w-full h-auto lg:h-[377px]  border border-boxBorderColor rounded-[12px] bg-boxBorderColor p-[24px] lg:mt-[70px] mt-[-40px] lg:mb-0 md:mb-0 mb-10">
          <div className="flex justify-left">
                <Tag className="" title="Production" />
              </div>
              <div>
                <h2 className="mt-[24px] mb-[4px] font-bold text-primary text-[16px] leading-[24px]">On this page</h2>
                <p className="my-[8px] font-[400] text-secondary text-[16px] leading-[24px]">1. Data Collection and Monitoring</p>
                <p className="my-[8px] font-[400] text-secondary text-[16px] leading-[24px]">2. Threat Intelligence Integration</p>
                <p className="my-[8px] font-[400] text-secondary text-[16px] leading-[24px]">3. Detection and Response Mechanisms</p>
                <p className="my-[8px] font-[400] text-secondary text-[16px] leading-[24px]">4. Alerting and Reporting</p>
                <p className="my-[8px] font-[400] text-secondary text-[16px] leading-[24px]">5. Integration with Security Tools</p>
                <h2 className="mt-[24px] lg:mb-[4px] font-bold text-primary text-[16px] leading-[24px] mb-[12px]">Share this article </h2>
                <div className="flex gap-[16px]">
                <Image
              src={facebook}
              alt="Contact Us Image"
              width={24}
              height={24}
            />
            <Image src={x} alt="Contact Us Image" width={24} height={400} />
            <Image
              src={instagram}
              alt="Contact Us Image"
              width={24}
              height={24}
            />
            <Image
              src={linkedIn}
              alt="Contact Us Image"
              width={24}
              height={24}
            />
                </div>
              </div>
        
          </div>
      
        </div>
      </main>
      <hr className="container lg:w-full md:w-full w-[80%] lg:mt-[60px]  bg-boxBorderColor h-[1px] border-0" />

    </section>
  );
};

export default BlogPage;
