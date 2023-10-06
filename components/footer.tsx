import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 Tien-Yu Chung. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">關於這個網站</span> 使用:
        React & Next.js ， TypeScript，Tailwind CSS，
        Framer Motion， React Email & Resend ，這個網站是我的個人網站，我會在這裡分享我的經歷和專案，這個網站所用到的技術我都還在學習中。
      </p>
    </footer>
  );
}
