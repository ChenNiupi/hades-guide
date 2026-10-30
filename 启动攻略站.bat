@echo off
chcp 65001 >nul
cd /d "%~dp0"
if not exist node_modules (
  echo 正在安装依赖，请稍候...
  call npm install
)
start "" http://127.0.0.1:5173
call npm run dev
pause
