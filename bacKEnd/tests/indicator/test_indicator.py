import pytest

from restAPI.indicator.models import enviromentalIdicators

@pytest.mark.django_db
def test_enviromentalIndicators():

    #Procedemos a crear una nueva compañia
    company = enviromentalIdicators(
        idCode = 0,
        company = "Company0",
        blackCarbon = 16.04,
        pm1 = 10.0,
        pm25 = 20.2,
        pm10 = 30.3,
    )

    company.save()

    #Testeamos que esta todo correcto
    assert company.company == "Company0"
    assert company.blackCarbon == 16.04
    assert company.pm1 == 10.0
    assert company.pm25 == 20.2
    assert company.pm10 == 30.3
