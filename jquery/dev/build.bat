@echo off
echo Welcome to jQuery VaultGuard build script
:jquery
echo Cleaning up ...
del jquery-vaultguard.js

echo Building Dependencies ...
cd ..\..\js
for /r %%f in (*.js) do (type "%%f") >> ..\jquery\dev\jquery-vaultguard.js

echo Building init ...
cd ..\jquery
type init.js >> dev\jquery-vaultguard.js

echo Building core ...
cd core
for /r %%f in (*.js) do (type "%%f") >> ..\dev\jquery-vaultguard.js

echo Building config ...
cd ..
type config.js >> dev\jquery-vaultguard.js

:end
echo Successfully completed ...
pause
