import React from "react";
import { BiLogoJava } from "react-icons/bi";
import { SiSpringboot } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import syncImg from "@/public/sync.png";
import excelhuntImg from "@/public/excelhunt.png";
import siteImg from "@/public/site.png";

export const links = [
  {
    name: "首頁",
    hash: "#home",
  },
  {
    name: "關於我",
    hash: "#about",
  },
  {
    name: "專案",
    hash: "#projects",
  },
  {
    name: "技能",
    hash: "#skills",
  },
  {
    name: "經歷",
    hash: "#experience",
  },
  {
    name: "聯絡我",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "台北城市科技大學",
    location: "學生",
    description:
      "我在這所大學就讀運動相關學系。",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024",
  },
  {
    title: "幼獅職訓局",
    location: "學生",
    description:
      "我在這所職訓局學習簡單的網頁設計相關課程，包括HTML、CSS、MySQL、Linux、Java等等技能，同時也考取了一張ITS發布的JAVA證照。",
    icon: React.createElement(BiLogoJava),
    date: "2022 Sep - 2023 Feb",
  },
  {
    title: "自學",
    location: "學習中",
    description:
      "在待業找工作的這段期間，我自學了更多JAVA，以及相關的Spring Boot框架，並且學習了一點點的NoSql技術，現在也正在學習新的前端框架。",
    icon: React.createElement(SiSpringboot),
    date: "2023 Feb - Now",
  },
] as const;

export const projectsData = [
  {
    title: "資料庫讀寫",
    description:
      "我接觸過一點點的python腳本，像是一些資料轉移的功能，這個專案就是一個腳本，負責定時從GCS上取的連結，並讀取連結內EXCEL檔的內容，然後搬移至MongoDB。",
    tags: ["Python", "MongoDB", "linux" , "GCP"],
    imageUrl: syncImg,
  },
  {
    title: "資料庫搜尋",
    description:
      "親戚的公司需要一個優秀的Excel查詢工具，於是寫了一個網站用於搜尋MongoDB的資料庫，並且可以透過登入後的管理頁面實時設定搜尋結果要顯示哪個資料表以及ROW。",
    tags: ["JAVA", "Spring Boot", "NGINX", "Mongo DB", "linux" , "GCP" , "cloudflare"],
    imageUrl: excelhuntImg,
  },
  {
    title: "個人網站",
    description:
      "這個網站就是您現在看到的網站，純粹是我在學習我不會的Recat和Next.js時拿來練手的項目，對於這個網站所用到的技術我也都還在學習中。",
    tags: ["React", "Next.js", "type script", "Tailwind"],
    imageUrl: siteImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Node.js",
  "Git",
  "MongoDB",
  "Python",
  "Java",
  "Spring Boot",
  "Linux",
  "NGINX",
] as const;
