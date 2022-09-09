# tests/peso/test_peso.py

import pytest
import json
from django.urls import reverse

def test_test(client):
		# Obtenemos la ruta de "test"
    url = reverse("test")
		# Hacemos una peticion GET con el cliente de Django test
    response = client.get(url)
		# Recibo un JSON que convierto a un diccionario para tratarlo
    content = json.loads(response.content)
		# Los asset me ayuda hacer las comprobaciones. 
		# ¿Recibo el código 200?
    assert response.status_code == 200
		# ¿El contenido de Ping es Pong?> {"ping": "pong!"}
    assert content["test"] == "test2"
