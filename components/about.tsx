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
      <SectionHeading>關於我</SectionHeading>
      <p className="mb-3">
        在高職取得
        <span className="font-medium">會計</span>證照以後, 我對未來感到很迷茫，於是在大學報名了運動相關的學系，
        但是在我大三時，我突然意識到自己真正有興趣的是對寫程式這件事，
        所以我在讀書的同時也去報了外面的培訓班，學習相關的網頁開發知識，
        也如願學習到了基礎的資料庫以及網頁開發知識，但是這些知識對我來說要進入這行是不夠的，於是我自學了更多之前上課沒教過的JAVA以及Spring Boot和其他相關的知識，並希望將來能成為一個{" "}
        <span className="font-medium">全端的開發人員</span>。{" "}
        <span className="italic">程式設計中我最喜歡的部分</span>是解決問題的部分。 我 
        <span className="underline">喜歡</span> 
        最後找出問題的感覺，同時也喜歡想出更好的解決方案，我擅長的程式有{" "}
        <span className="font-medium">
          JAVA , Spring Boot , HTML , CSS , Linux , Servlet , MongoDB , MySQL , JavaScript 
        </span>
        。我也熟悉 NGINX 和 網站架設。我一直在尋求學習新技術。我目前正在找{" "}
        <span className="font-medium">全職的</span> 網頁開發人員的工作。
      </p>

      <p>
        <span className="italic">當我沒有在寫程式時</span>, 我喜歡玩各種線上遊戲, 看電影, 和去流浪動物之家當志工。我也很享受{" "}
        <span className="font-medium">學習新事物</span>。我最近正在學習關於
        {" "}
        <span className="font-medium">電腦組裝</span> 的知識。
      </p>
    </motion.section>
  );
}
