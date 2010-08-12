@echo off
echo.

type scripts\lib\fulljslint.js > scripts\run.js
type scripts\lib\json2.js >> scripts\run.js

type scripts\source\util.js >> scripts\run.js
type scripts\source\lint.js >> scripts\run.js
type scripts\source\config.js >> scripts\run.js
type scripts\source\main.js >> scripts\run.js



java -cp lib\js.jar org.mozilla.javascript.tools.shell.Main scripts\run.js config.json



echo.
pause.
