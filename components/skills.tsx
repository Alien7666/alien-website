"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { skillsData, type Skill } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

// 用於顯示熟練度的星星元件
const ProficiencyStars = ({ level }: { level: number }) => {
  const stars = [];
  const fullStars = Math.floor(level);
  const hasHalfStar = level % 1 >= 0.5;
  
  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-300" />);
    }
  }
  
  return <div className="flex gap-1 justify-center mt-1">{stars}</div>;
};

// 技能卡片元件
const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.li
      className="group relative bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 cursor-pointer transition-all duration-300 hover:shadow-lg"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center">
        <span className="font-medium">{skill.name}</span>
      </div>
      
      {/* 懸停時顯示的詳細信息卡片 */}
      <div 
        className={`absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[calc(100%+16px)] bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg transition-all duration-600 z-50 w-64 ${isHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        
        <div className="text-left">
          <h4 className="font-bold text-lg mb-1">{skill.name}</h4>
          <ProficiencyStars level={skill.proficiency} />
          <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">{skill.experience}</p>
          
          {skill.projects && skill.projects.length > 0 && (
            <div className="mt-2">
              <h5 className="font-semibold text-sm">相關專案：</h5>
              <ul className="text-xs text-gray-600 dark:text-gray-400 mt-1 list-disc list-inside">
                {skill.projects.map((project, idx) => (
                  <li key={idx}>{project}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.li>
  );
};

export default function Skills() {
  const { ref } = useSectionInView("技能");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>我會的技能</SectionHeading>
      <p className="text-gray-700 dark:text-white/80 mb-8">懸停在技能上可查看詳細資訊和相關專案經驗</p>
      
      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} className="mb-10">
          <h3 className="text-xl font-bold mb-4">{category}</h3>
          <ul className="flex flex-wrap justify-center gap-3 text-lg text-gray-800">
            {skills.map((skill, index) => (
              <SkillCard key={`${category}-${index}`} skill={skill} index={index} />
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
