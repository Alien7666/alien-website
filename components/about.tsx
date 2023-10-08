"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("關於我");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>
        <div className="font-blod">
          關於我
        </div>
        </SectionHeading>
      <p className="mb-3">
        從高職取得會計證照之後，我的人生方向一度迷茫。大學選擇了運動相關學系，大三時發現自己對程式設計有著不可或缺的熱情。於是，在學期間參加了外部的培訓班，學習網頁開發，習得了基礎的資料庫和網頁開發知識，但我明白要真正踏入此行，這點基礎是遠遠不夠的。因此，我自學了更多的JAVA、以及Spring Boot等技術，並熱切地期望能成為一名全端開發人員。
      </p>
      <p className="mb-3 text-lg">
        <span className="font-bold">"程式設計中，我最享受的是解決問題的過程"</span>
      </p>
      <p>  
        從確定問題到思索最佳解決方案，每一步都讓我充滿成就感，除了在培訓班學到的技能，還精通JAVA、Spring Boot、HTML、CSS、Linux、Servlet、MongoDB、MySQL和JavaScript，且熟知NGINX和網站架設。我對於新技術，總是保持學習的態度，目前正尋找網頁開發的全職職位。
      </p>
      <p>
        生活中，我熱愛線上遊戲、電影，且常在流浪動物之家作為志工貢獻自己的力量，最近也開始深入學習電腦組裝的相關知識。
      </p>
    </motion.section>
  );
}
