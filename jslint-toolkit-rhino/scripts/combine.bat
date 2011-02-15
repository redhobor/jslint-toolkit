@echo off
echo.

type lib\fulljslint.js > run.js
type lib\json2.js >> run.js

type source\util.js >> run.js
type source\lint.js >> run.js
type source\config.js >> run.js
type source\main.js >> run.js


echo.
pause.
