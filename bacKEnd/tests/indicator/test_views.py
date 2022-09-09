from math import degrees
import pytest

from restAPI.indicator.models import enviromentalIdicators

@pytest.mark.django_db
def test_add_enviromentalIdicators(client):

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
def test_get_enviromentalIdicator(client):

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
def test_get_enviromentalIdicator_incorrect_id(client):

    # When
    resp = client.get(f"/api/enviromentalIdicators/-1/")

    # Then
    assert resp.status_code == 404

@pytest.mark.django_db
def test_get_allenviromentalIdicator(client,faker):

    # Given
    def create_random_indicator():
        return enviromentalIdicators.objects.create(
            company=faker.company(),
            #blackCarbon=faker.blackCarbon(),
            #pm1=faker.pm1(),
            #pm25=faker.pm25(),
            #pm10=faker.pm10(),
        )

    company_1 = create_random_indicator()
    company_2 = create_random_indicator()

    # When
    resp = client.get(f"/api/enviromentalIdicators/")

    print(resp)

    # Then
    assert resp.status_code == 201
    assert resp.data[0]["company"] == company_1.company
    assert resp.data[1]["company"] == company_2.company

@pytest.mark.django_db
def test_remove_enviromentalIdicator(client):
    
    # Given
    indicator = enviromentalIdicators.objects.create(
        company = "Company0",
        idCode = 0,
        blackCarbon = 16.04,
        pm1 =  10.0,
        pm25 = 20.2,
        pm10 = 30.3,
    )

    # Check if the enviromentalIndicator exist
    respExist = client.get(f"/api/enviromentalIdicators/{indicator.idCode}/")
    assert respExist.status_code == 200
    assert respExist.data["company"] == "Company0"

    # When
    respDelete = client.delete(f"/api/enviromentalIdicators/{indicator.idCode}/")
    respList = client.get(f"/api/enviromentalIdicators/")
    respNewDetail = client.get(f"/api/enviromentalIdicators/{indicator.idCode}/")

    # Then
    assert respDelete.status_code == 200
    assert respDelete.data["company"] == "Company0"
    assert respList.status_code == 201
    assert len(respList.data) == 0
    assert respNewDetail.status_code == 404

@pytest.mark.django_db
def test_remove_enviromentalIdicator_incorrect_id(client):
    
    # Given
    indicator = enviromentalIdicators.objects.create(
        company = "Company0",
        idCode = 0,
        blackCarbon = 16.04,
        pm1 =  10.0,
        pm25 = 20.2,
        pm10 = 30.3,
    )

    # When
    respDelete = client.delete(f"/api/enviromentalIdicators/-1/")

    # Then
    ## Check status delete
    assert respDelete.status_code == 404
    
@pytest.mark.django_db
def test_update_enviromentalIdicator(client):

    # Given
    indicator = enviromentalIdicators.objects.create(
        company = "Company0",
        idCode = 0,
        blackCarbon = 16.04,
        pm1 =  10.0,
        pm25 = 20.2,
        pm10 = 30.3,
    )

    # When
    resp = client.put(
        f"/api/enviromentalIdicators/{indicator.idCode}/",
        {
            "company" : "Company0",
            "idCode" : 0,
            "blackCarbon" : 16.04,
            "pm1" :  20.0,
            "pm25" : 30.2,
            "pm10" : 40.3,
        },
        content_type="application/json"
    )

    # Then
    assert resp.status_code == 200
    assert resp.data["company"] == "Company0"
    assert resp.data["idCode"] == 0
    assert resp.data["blackCarbon"] == 16.04
    assert resp.data["pm1"] == 20.0
    assert resp.data["pm25"] == 30.2
    assert resp.data["pm10"] == 40.3

    respDetails = client.get(f"/api/enviromentalIdicators/{indicator.idCode}/")
    assert respDetails.status_code == 200
    assert respDetails.data["company"] == "Company0"
    assert respDetails.data["idCode"] == 0
    assert respDetails.data["blackCarbon"] == 16.04
    assert respDetails.data["pm1"] == 20.0
    assert respDetails.data["pm25"] == 30.2
    assert respDetails.data["pm10"] == 40.3

@pytest.mark.django_db
def test_update_enviromentalIdicator_invalid_json(client):

    # Given
    indicator = enviromentalIdicators.objects.create(
        company = "Company0",
        idCode = 0,
        blackCarbon = 16.04,
        pm1 =  10.0,
        pm25 = 20.2,
        pm10 = 30.3,
    )

    # When
    resp = client.put(
        f"/api/enviromentalIdicators/{indicator.idCode}/",
        {
            "nana" : "Company0",
            "nana2" : 0,
        },
        content_type="application/json"
    )

    # Then
    assert resp.status_code == 400