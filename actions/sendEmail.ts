"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('傳送Email');
  const message = formData.get('訊息');

  console.log('Received formData:', formData);
  console.log('senderEmail:', senderEmail);
  console.log('message:', message);



  if (!validateString(senderEmail, 500)) {
    return {
      error: "錯誤的寄件者email地址",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "錯誤的留言內容",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "jason6080717@gmail.com",
      subject: "來自個人網站聯絡表單的訊息",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
