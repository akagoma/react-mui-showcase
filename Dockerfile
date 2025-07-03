
FROM mcr.microsoft.com/playwright:v1.43.1-jammy

# 作業ディレクトリを作成
WORKDIR /app

# キャッシュが効くように先に package.json だけコピー
COPY package*.json ./

# 依存関係をインストール（devDependenciesも含む）
RUN npm install

# アプリのソースコードをコピー
COPY . .

# Playwrightのブラウザを明示的に入れる（毎回やりたくない）
RUN npx playwright install --with-deps

CMD ["npm", "run", "test-e2e:ui"]