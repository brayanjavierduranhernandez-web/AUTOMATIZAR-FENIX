@echo off
title Asistente de Cargue FENIX - Hospital San Jose de Maicao
echo Iniciando Asistente de Cargue FENIX en Brave...

if exist "C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe" (
    start "" "C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe" "%~dp0index.html"
) else (
    start "" "%~dp0index.html"
)
exit
