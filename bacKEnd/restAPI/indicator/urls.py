from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from restAPI.indicator.views import test, addenviromentalIdicators, enviromentalIdicatorDetail, fileupload, fileupload2

urlpatterns = [
    path('test/',test,name='test'),
    path('api/enviromentalIdicators/',addenviromentalIdicators.as_view()),
    path('api/enviromentalIdicators/<int:idIndicator>/',enviromentalIdicatorDetail.as_view()),
    path('api/upload/', fileupload.as_view()),
    path('api/upload2/', fileupload2.as_view()),
]