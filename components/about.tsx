"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type TabName = "skills" | "experience" | "education";

const tabs: { id: TabName; label: string }[] = [
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
];

const tabContent: Record<TabName, { title: string; subtitle: string }[]> = {
  skills: [
    { title: "Web Developer", subtitle: "Design & Build Websites" },
    { title: "Graphic Designer", subtitle: "Design Visuals & Graphics" },
    { title: "Filmmaker & Photographer", subtitle: "Capture Moments & Stories" },
  ],
  experience: [
    { title: "2022 - Current", subtitle: "Venue Tech" },
    { title: "2024 (1 Month)", subtitle: "CodSoft" },
    { title: "2021 - 2022", subtitle: "Mugg & Bean (Canal Walk)" },
  ],
  education: [
    { title: "2022 - 2024", subtitle: "Richfield College" },
    { title: "2021 - 2022", subtitle: "Richfield College" },
    { title: "2015 - 2019", subtitle: "Leiden High School" },
  ],
};

export function About() {
  const [activeTab, setActiveTab] = useState<TabName>("skills");

  return (
    <section id="about" className="py-20 text-muted">
      <div className="px-[10%]">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Profile Image */}
          <div className="md:w-[35%]">
            <Image
              src="/images/user.png"
              alt="Tatenda Allen Chisvo"
              width={500}
              height={600}
              className="w-full rounded-2xl"
            />
          </div>

          {/* About Content */}
          <div className="md:w-[60%]">
            <h2 className="text-4xl md:text-6xl font-semibold text-foreground mb-6">
              About Me
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              Hi there! I&apos;m Tatenda Allen Chisvo, a recent graduate with a Bachelor of Science in Information Technology. I&apos;m passionate about combining creativity with technology to solve problems and improve lives. I have a strong background in software development, from front-end technologies like HTML, CSS, and JavaScript to back-end development with PHP and MySQL.
              <br /><br />
              Throughout my studies, I&apos;ve honed my skills in coding, problem-solving, and project management, with experience in creating user-friendly interfaces and robust backend systems. I&apos;ve also gained hands-on experience in both individual and group projects, including internships, where I developed personal portfolio websites, landing pages, and educational resources platforms.
              <br /><br />
              What sets me apart? My mix of technical expertise, creativity, and strong teamwork makes me an adaptable and valuable asset in dynamic environments.
            </p>

            {/* Tabs */}
            <div className="flex gap-8 md:gap-12 mt-8 mb-10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "text-base md:text-lg font-medium cursor-pointer relative after:content-[''] after:w-0 after:h-[3px] after:bg-primary after:absolute after:left-0 after:-bottom-2 after:transition-all after:duration-500",
                    activeTab === tab.id && "after:w-1/2"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <ul className="space-y-3">
              {tabContent[activeTab].map((item, index) => (
                <li key={index}>
                  <span className="text-primary/70 text-sm">{item.title}</span>
                  <br />
                  {item.subtitle}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
