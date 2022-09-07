from importlib.metadata import files
from django.http import JsonResponse
from rest_framework.views import APIView 
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers  import MultiPartParser, FormParser
from .models import enviromentalIdicators
from .serializers import enviromentalIdicatorsSerializer, uploaEnviromentaldFile
from django.conf import settings
import os

# Create your views here.
#https://programadorwebvalencia.com/cursos/django-rest-framework/introducci%C3%B3n/
#https://www.youtube.com/watch?v=T-RIjLIg-9c&list=PLBPnDQcodc_TqwCTfHqfojINKCyVunkC4&index=2

def test(request):
    data = {"test":"test2"}
    return JsonResponse(data)

class addenviromentalIdicators(APIView):

    def get(self,request):
        enviIdicators = enviromentalIdicators.objects.all().order_by('id')
        serilizer = enviromentalIdicatorsSerializer(enviIdicators, many = True)
        return Response(serilizer.data,status=status.HTTP_201_CREATED)

    def post(self,request):
        serializer = enviromentalIdicatorsSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class enviromentalIdicatorDetail(APIView):

    def get(self,request,idIndicator):
        indicators = enviromentalIdicators.objects.filter(idCode = idIndicator).first()
        serializer = enviromentalIdicatorsSerializer(indicators)
        if (indicators):
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)

class fileupload(APIView):
    parserClasses = (MultiPartParser,FormParser)
    def post(self,request,format=None):
        fileSerializer = uploaEnviromentaldFile(data = request.data)
        if fileSerializer.is_valid():
            file = request.FILES["file"]
            fileSerializer.save()
            filePath = settings.MEDIA_ROOT + str(file)
            filename = filePath.split("/")[-1]
            print(filename)
            os.remove(filePath)
            return Response(fileSerializer.data, status=status.HTTP_200_OK)
        else:
            return Response(fileSerializer.errors, status=status.HTTP_400_BAD_REQUEST)

#Se procede a subir el archivo sin guardar en la base de datos
class fileupload2(APIView):
    parserClasses = (MultiPartParser,FormParser)
    def post(self,request,format=None):
        if request.method == 'POST':
            #Por si quisieramos guardar otro archivo
            file = request.FILES["file"]
            filename = settings.MEDIA_ROOT + "/" + str(file)
            with open(filename,"wb+") as tempFile:
                for chunk in file.chunks():
                    tempFile.write(chunk)
            
            filePath = settings.MEDIA_ROOT + "/" +  str(file)
            filename = filePath.split("/")[-1]
            print(filename)
            #os.remove(filePath)
            return Response("OK", status=status.HTTP_200_OK)
        else:
            return Response("ERROR", status=status.HTTP_400_BAD_REQUEST)
