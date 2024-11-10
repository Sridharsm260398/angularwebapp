@echo off
REM Step 1: Navigate to the Angular project directory
echo Navigating to Node Project...
cd /d "C:\Users\2225146\MyProjects\Node-postgres"
REM Step 2: Build the Angular project
echo Starting Node Project...
set NODE_OPTIONS=--openssl-legacy-provider
npm start
if %ERRORLEVEL% NEQ 0 (
   echo Angular build failed!
   exit /b %ERRORLEVEL%
)

echo Server Started!