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
        您好，我是鍾天祐，一位自學轉職的全端工程師。
        雖然大學主修運動相關科系，但我在大三的時候意外接觸到程式設計，從此深深著迷，並想投入這個領域。
      </p>
      <p className="mb-3">
        為了實現轉職目標，我參加了外部培訓課程，打下網頁開發及資料庫的基礎。之後更進一步自學了 Java 與 Spring Boot 強化後端能力。我也熟悉 Linux 環境、Nginx 配置與整套網站部署流程，也能獨立完成前後端整合。
      </p>
      <p className="mb-3">  
      我最享受的，是從問題中抽絲剝繭、設計解法的過程，這份成就感驅使我不斷精進，對新技術也始終保持高度好奇與學習熱情。目前我正積極尋找全職的前/後/全端開發職位，希望在實務中累積更多經驗，並位公司創造價值。
      </p>
      <p>
        在現實生活中，我喜歡線上遊戲跟電影，也研究電腦組裝一陣子了，喜歡透過實作探索各種技術細節。
      </p>
    </motion.section>
  );
}
