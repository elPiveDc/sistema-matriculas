import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(__file__)))

from main import app
from fastapi.testclient import TestClient

client = TestClient(app)


def test_home():
    response = client.get("/")
    assert response.status_code == 200


def test_crear_curso():
    response = client.post("/cursos", json={"nombre": "Programación"})

    assert response.status_code == 200


def test_listar_cursos():
    response = client.get("/cursos")

    assert response.status_code == 200
