@echo off
echo Ejecutando pruebas...
set PYTHONPATH=.
pytest tests/test_api.py
pause
