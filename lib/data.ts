import React from "react";
import { BiLogoJava } from "react-icons/bi";
import { SiSpringboot } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import { DiTerminal } from "react-icons/di";
import syncImg from "@/public/sync.png";
import excelhuntImg from "@/public/excelhunt.png";
import siteImg from "@/public/site.png";
import yinzSpring from "@/public/yinz-spring.png";
import yinzReact from "@/public/yinz-react.png";
import lineBot from "@/public/Linebot.png";
import errorPage from "@/public/ErrorPage.png";

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
    title: "遠傳工程師",
    location: "IDC OP",
    description:
      "負責IDC的維運工作，包括軟硬體的維護。",
    icon: React.createElement(DiTerminal),
    date: "2025 Feb - Now",
  },
  {
    title: "開發設計師網站",
    location: "全端開發",
    description:
      "開發前後端設計師網站，除了UI/UX以外，負責前端介面以及功能的開發、後端的API設計、資料庫架構、伺服器架構、雲端服務架構等等，總耗時約八個多月。",
    icon: React.createElement(DiTerminal),
    date: "2024 Jan - 2024 Aug",
  },
  {
    title: "自學",
    location: "學習中",
    description:
      "在找工作的這段期間，我自學了更多JAVA，以及相關的Spring Boot框架，並且學習了的NoSql技術，現在也正在學習新的前端框架。",
    icon: React.createElement(SiSpringboot),
    date: "2023 Feb - Now",
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
    title: "台北城市科技大學",
    location: "大學生",
    description:
      "我在這所大學就讀運動學系。",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024 Jun",
  },
] as const;

export const projectsData = [
  {
    title: "Excel-MongoDB導入",
    description:
      "寫了一個Python腳本，使用Google Drive API，用於實現自動化讀取雲端硬碟中的特定Excel文件並將其內容導入MongoDB。",
    tags: ["Python", "MongoDB", "linux" , "GCP","Docker"],
    imageUrl: syncImg,
  },
  {
    title: "資料庫搜尋器",
    description:
      "為一家公司設計了一個網站，用於實現搜尋和管理MongoDB資料庫中的資料，並且透過登入功能來保護資料不會被隨意修改，使用Spring boot框架與Thymeleaf模板，透過多核心優化實現了搜尋加速，最後使用NGINX和Cloudflare來實現反向代理和CDN。",
    tags: ["JAVA", "Spring Boot", "NGINX", "Mongo DB", "linux" ,"Docker", "GCP" , "Cloudflare"],
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
  {
    title: "Line Bot",
    description:
      "透過Spring串接Openai API，並實現了自動偵測語言並翻譯的功能，並且透過Line Bot來實現使用者的互動。",
    tags: ["Spring", "Line Messaging API", "Openai API"],
    imageUrl: lineBot,
  },
  {
    title: "Sping boot後端",
    description:  
      "使用Spring boot和JWT token實現了一個後端，用於Restful API練習以及作為下個項目的後端開發，並且使用了MongoDB作為資料庫，最後使用Docker部署，使用NGINX和Cloudflare來實現反向代理和CDN。",
    tags: ["Spring Boot", "JWT", "cookie", "Restful API","MongoDB","Docker","NGINX","Cloudflare"],
    imageUrl: yinzSpring
  },
  {
    title: "設計師網站",
    description:
      "為我讀設計系的朋友開發了前端網站，後端使用上面的Spring boot，前端使用React，UI的設計由設計師設計完成後，我負責切版以及實現如聯絡表單.篩選作品.後台的作品更新等等的相關功能，並且使用上個專案製作的Restful API來從Spring boot後端取得資料以及身分驗證。",
    tags: ["React", "JavaScript", "Restful API", "Spring Boot", "JWT"],
    imageUrl: yinzReact,
    ctalink:"https://inz-studio.com/"
  },
  {
    title: "Error Page",
    description:
      "一個簡單的http狀態碼錯誤頁面，基於純HTML.CSS.JS，開發的同時也在幫我自己複習前端基礎。",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: errorPage,
    ctalink:"https://github.com/Alien7666/error-pages"
  },
] as const;

// 定義技能資料的類型
export type Skill = {
  name: string;
  proficiency: number; // 1-5 表示熟練度
  experience: string;
  projects?: string[]; // 相關項目名稱
};

// 更新後的技能資料結構
export const skillsData: Record<string, Skill[]> = {
  前端: [
    { 
      name: "HTML", 
      proficiency: 5, 
      experience: "兩年半經驗，熟悉語意化標籤和最佳實踐",
      projects: ["個人網站", "設計師網站","Error Page"]
    },
    { 
      name: "CSS", 
      proficiency: 5, 
      experience: "兩年半經驗，熟悉 Flexbox、Grid 和響應式設計",
      projects: ["設計師網站","Error Page"]
    },
    { 
      name: "JavaScript", 
      proficiency: 4, 
      experience: "兩年經驗，了解事件處理、物件導向、函式庫",
      projects: ["設計師網站", "資料庫搜尋器"]
    },
    { 
      name: "SASS/SCSS", 
      proficiency: 2, 
      experience: "一年以上經驗，用於特定專案的樣式管理",
      projects: ["資料庫搜尋器"]
    },
    { 
      name: "React", 
      proficiency: 3, 
      experience: "一年經驗，熟悉基本組件和 React Hooks",
      projects: ["個人網站", "設計師網站"]
    }
  ],
  後端: [
    { 
      name: "Node.js", 
      proficiency: 2, 
      experience: "一年經驗，用於建立 API 和伺服器端應用",
      projects: ["設計師網站"]
    },
    { 
      name: "Java", 
      proficiency: 4, 
      experience: "兩年半經驗，熟悉 Java 語言的基礎概念和多執行緒程式設計",
      projects: ["資料庫搜尋器", "Line Bot", "Sping boot後端"]
    },
    { 
      name: "Spring Boot", 
      proficiency: 4, 
      experience: "一年半經驗，用於建立 RESTful API 和處理資料庫CRUD操作",
      projects: ["資料庫搜尋器", "Line Bot", "Sping boot後端"]
    }
  ],
  資料庫: [
    { 
      name: "MongoDB", 
      proficiency: 4, 
      experience: "兩年經驗，基本上都用在資料儲存和查詢",
      projects: ["Excel-MongoDB導入", "資料庫搜尋器", "Sping boot後端"]
    },
    { 
      name: "MySQL", 
      proficiency: 3, 
      experience: "一年經驗，熟悉基本的 CRUD 指令",
      // projects: [""]
    }
  ],
  伺服器: [
    { 
      name: "NGINX", 
      proficiency: 4, 
      experience: "兩年半經驗，主要使用在反向代理和 SSL 配置",
      projects: ["所有專案"]
    },
    { 
      name: "Apache", 
      proficiency: 2, 
      experience: "半年經驗，用於基本的 Web 伺服器配置",
      // projects: []
    }
  ],
  雲服務: [
    { 
      name: "AWS", 
      proficiency: 2.5, 
      experience: "一年經驗，使用過 EC2、S3 這兩種服務",
      // projects: []
    },
    { 
      name: "Google Cloud", 
      proficiency: 3, 
      experience: "一年半經驗，用過Cloud Storage、Api、Compute Engine",
      // projects: ["Excel-MongoDB導入", "資料庫搜尋器"]
    },
    { 
      name: "Azure", 
      proficiency: 1, 
      experience: "基本了解，有使用 Azure App Service 的經驗",
      projects: []
    },
    { 
      name: "Vercel", 
      proficiency: 2.5, 
      experience: "一年經驗，用於部署前端應用和 Next.js 專案",
      projects: ["個人網站","Online CV"]
    }
  ],
  其他: [
    { 
      name: "Git", 
      proficiency: 4, 
      experience: "三年經驗，了解基本的版本控制概念以及分支的管理、合併、解決衝突",
      projects: ["所有專案"]
    },
    { 
      name: "Docker", 
      proficiency: 4, 
      experience: "兩年經驗，用於容器化應用和開發環境，基本上所有開發過的專案都是打包起來使用 Docker 部署",
      projects: ["所有專案"]
    },
    { 
      name: "Linux", 
      proficiency: 4, 
      experience: "三年經驗，熟悉 Linux 腳本和系統操作",
      projects: ["所有專案"]
    },
    { 
      name: "Python", 
      proficiency: 2.5, 
      experience: "半年經驗，用於自動化腳本和資料處理",
      projects: ["Excel-MongoDB導入"]
    },
    { 
      name: "Cloudflare", 
      proficiency: 4, 
      experience: "兩年經驗，用於 CDN、DNS 管理和 DDoS 防護",
      projects: ["所有專案"]
    }
  ],
} as const;
