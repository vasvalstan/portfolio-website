"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";

const services = [
  {
    icon: "/assets/services/frontend.svg", // Reusing icons for now, ideal to change later
    href: "",
    title: "E2E Test Automation",
    description: "Robust Playwright frameworks for web & API testing.",
  },
  {
    icon: "/assets/services/backend.svg",
    href: "",
    title: "Performance Testing",
    description: "Scalable load testing with k6 and Grafana.",
  },
  {
    icon: "/assets/services/seo.svg",
    href: "",
    title: "CI/CD Pipelines",
    description: "Automated workflows using GitHub Actions & AWS.",
  },
  {
    icon: "/assets/services/design.svg",
    href: "",
    title: "Contract Testing",
    description: "Consumer-driven contract testing with Pact.",
  },
];

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[60px]">
          <div className="flex flex-col justify-center gap-6 w-full xl:w-[480px]">
            <h2 className="h2 text-4xl font-bold">
              Ensuring <span className="text-accent">Software Quality</span> at Every Layer
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              I provide comprehensive QA solutions that span the entire software development lifecycle. 
              From automated end-to-end tests to performance engineering, my goal is to deliver 
              robust, scalable, and bug-free applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] w-full">
            {services.map((item, index) => {
              return (
                <div 
                  key={index}
                  className="bg-[#232329] h-[220px] rounded-xl p-8 flex flex-col justify-center group hover:bg-accent/5 transition-all duration-500 hover:scale-[1.02]"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-5xl text-accent transition-all duration-500 group-hover:text-accent-hover">
                      <Image src={item.icon} width={42} height={42} alt="" className="filter brightness-0 invert group-hover:brightness-100 transition-all duration-500" /> 
                    </div>
                    <div className="text-3xl text-white group-hover:text-accent transition-all duration-500 -rotate-45 group-hover:rotate-0 cursor-pointer">
                      <MdOutlineArrowOutward />
                    </div>
                  </div>
                  <h3 className="text-[24px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 mb-2">{item.title}</h3>
                  <p className="text-white/60 text-[15px]">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
