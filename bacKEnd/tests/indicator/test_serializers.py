import pytest

from restAPI.indicator.serializers import enviromentalIdicatorsSerializer

def test_enviromentalIdicatorsSerializer():

    #Procedemos a crear una nueva compañia
    valid_serializer_data = {
        "company": "Company0",
        "blackCarbon": 16.04,
        "pm1": 10.0,
        "pm25": 20.2,
        "pm10": 30.3,
    }

    serializer = enviromentalIdicatorsSerializer(data = valid_serializer_data)

    #Testeamos que esta todo correcto
    assert serializer.is_valid()
    assert serializer.validated_data == valid_serializer_data
    assert serializer.data == valid_serializer_data
    assert serializer.errors == {}

def test_invalid_enviromentalIdicatorsSerializer():
    
    #Procedemos a crear una nueva compañia
    invalid_serializer_data = {
    }

    serializer = enviromentalIdicatorsSerializer(data = invalid_serializer_data)

    #Testeamos que esta todo correcto
    assert not serializer.is_valid()
    assert serializer.validated_data == {}
    assert serializer.data == invalid_serializer_data
    print (serializer.errors)
    assert serializer.errors == {
        "company": ["This field is required."],
    }
