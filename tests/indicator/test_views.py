import pytest

from restAPI.indicator.models import enviromentalIdicators

@pytest.mark.django_db
def text_addenviromentalIdicators(client):

    #Test the post form URL
    indicators = enviromentalIdicators.objects.all()
    assert len(indicators) == 0

    resp = client.post(
        "/api/enviromentalIdicators/",
        {
            "company": "Company0",
            "blackCarbon": 16.04,
            "pm1": 10.0,
            "pm25": 20.2,
            "pm10": 30.3,
        },
        content_type="application/json"
    )

    # Then
    assert resp.status_code == 201
    assert resp.data["company"] == "Company0"

    indicators = enviromentalIdicators.objects.all()
    assert len(indicators) == 1

@pytest.mark.django_db
def text_getenviromentalIdicator(client):

    #Test the post form URL
    indicator = enviromentalIdicators.objects.create(
        company = "Company0",
        blackCarbon = 16.04,
        pm1 =  10.0,
        pm25 = 20.2,
        pm10 = 30.3,
    )

    # when
    resp = client.get(f"/api/enviromentalIdicators/{indicator.idCode}/")
    assert resp.status_code == 200
    assert resp.data["company"] == "Company0"

@pytest.mark.django_db
def test_getenviromentalIdicator_incorrect_id(client):

    # When
    resp = client.get(f"/api/enviromentalIdicators/-1/")

    # Then
    assert resp.status_code == 404

@pytest.mark.django_db
def text_getallenviromentalIdicator(client,faker):

    # Given
    def create_random_indicator():
        return enviromentalIdicators.objects.create(
            company=faker.company(),
            blackCarbon=faker.blacCarbon(),
            pm1=faker.pm1(),
            pm25=faker.pm25(),
            pm10=faker.pm10(),
        )

    company_1 = create_random_indicator()
    company_2 = create_random_indicator()

    # When
    resp = client.get(f"/api/enviromentalIdicators/")

    # Then
    assert resp.status_code == 200
    assert resp.data[0]["company"] == company_1.title
    assert resp.data[1]["company"] == company_2.title