# Create project folder
mkdir dsa-docs && cd dsa-docs

# Initialize npm
npm init -y

# Install VitePress
npm install vitepress --save-dev

npx vitepress init

Local dev: npm run docs:dev
Build: npm run docs:build
