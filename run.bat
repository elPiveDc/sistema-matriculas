@echo off

echo Instalando dependencias...

pip install -r requirements.txt

echo Iniciando servidor...

uvicorn main:app --reload