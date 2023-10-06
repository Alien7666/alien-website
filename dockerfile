# 使用 Node.js 基礎映像
FROM node:18.12.1

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json
COPY package*.json ./

# 安裝依賴
RUN npm install

# 複製其他源文件
COPY . .

#環境變量
ENV RESEND_API_KEY=re_9hkKYhEG_FirrkvMqPhsSqVcCg9xqrHqy

# 構建應用程序
RUN npm run build || (cat /root/.npm/_logs/*-debug.log && exit 1)

# 啟動應用程序
CMD ["npm", "start"]
