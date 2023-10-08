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
    title: "Excel-MongoDB導入",
    description:
      "開發了一個Python腳本，用於自動從GCS讀取Excel文件並將其內容導入MongoDB。",
    tags: ["Python", "MongoDB", "linux" , "GCP"],
    imageUrl: syncImg,
  },
  {
    title: "MongoDB搜尋器",
    description:
      "為一家公司設計了一個網站工具，用於實時搜尋和管理MongoDB資料庫中的資料。",
    tags: ["JAVA", "Spring Boot", "NGINX", "Mongo DB", "linux" , "GCP" , "cloudflare"],
    imageUrl: excelhuntImg,
    ctalink:"https://github.com/Alien7666/excelhunt"
  },
  {
    title: "個人網站",
    description:
      "開發了我的個人網站，使用React和Next.js，作為學習這些技術的一部分。",
    tags: ["React", "Next.js", "type script", "Tailwind"],
    imageUrl: siteImg,
    ctalink:"https://github.com/Alien7666/alien-website"
  },
] as const;

export const skillsData = {
  前端: ["HTML5", "CSS", "JavaScript", "SASS/SCSS"],
  後端: ["Node.js", "Java", "Spring Boot"],
  資料庫: ["MongoDB", "MySQL"],
  伺服器:["NGINX","Apache"],
  雲服務:["AWS","Google Cloud Platform"],
  其他:["Git","Docker","Linux","Python"],
} as const;
